import middy from '../middlewares/middy';
export * from '../models/mongooseDb';
import { Posts } from '../models/posts';
import pushEvent from '../models/pushEvent';

async function createPost(event, context) {
  const { title, description } = event.body;
  const now = new Date();
  const data = {
    title,
    description,
    createdAt: now.toISOString()
  };
  const post = new Posts(data);

  try {
    await post.save();
    await pushEvent('post:create', post);
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(post)
  };
}

export const handler = middy(createPost);