import middy from '../middlewares/middy';
export * from '../models/mongooseDb';
import { Query } from '../models/query';

async function createQuery(event, context) {
  const { postId, post, comments } = event.body;
  const now = new Date();
  const data = {
    postId,
    post,
    comments,
    createdAt: now.toISOString()
  };
  const query = new Query(data);

  try {
    await query.save();
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(query)
  };
}

export const handler = middy(createQuery);