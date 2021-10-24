import middy from '../middlewares/middy';
export * from '../models/mongooseDb';
import { Query } from '../models/query';

async function listAllCommentsByPost(event, context) {

  const { postId } = event.pathParameters;
  let all = null;

  try {
    all = await Query.findOne({ postId });
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(all)
  };
}

export const handler = middy(listAllCommentsByPost);