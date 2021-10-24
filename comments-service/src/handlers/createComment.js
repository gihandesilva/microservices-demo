import middy from '../middlewares/middy';
export * from '../models/mongooseDb';
import { Comments } from '../models/Comments';
import pushEvent from '../models/pushEvent';

async function createComment(event, context) {
  const { postId, body } = event.body;
  const now = new Date();
  const data = {
    postId,
    body,
    createdAt: now.toISOString()
  };
  const comment = new Comments(data);

  try {
    await comment.save();
    await pushEvent('comment:create', comment);
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(comment)
  };
}

export const handler = middy(createComment);