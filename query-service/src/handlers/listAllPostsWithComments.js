import middy from '../middlewares/middy';
export * from '../models/mongooseDb';
import { Query } from '../models/query';

async function listAllPostsWithComments(event, context) {
  let all = null;

  try {
    all = await Query.find();
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(all)
  };
}

export const handler = middy(listAllPostsWithComments);