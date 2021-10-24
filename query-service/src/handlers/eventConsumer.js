import middy from '../middlewares/middy';
export * from '../models/mongooseDb';
import { Query } from '../models/query';

async function eventConsumer(event, context) {
  try {
    for (const record of event.Records) {
      const payload = record.kinesis;
      const message = Buffer.from(payload.data, 'base64').toString();
      const eventData = JSON.parse(message);
      const { event, data } = eventData;

      console.log(
        `Kinesis Message:
          partition key: ${payload.partitionKey}
          sequence number: ${payload.sequenceNumber}
          kinesis schema version: ${payload.kinesisSchemaVersion}
          data: ${message}
        `);

      // process events
      switch (event) {
        case 'post:create':
          await createPost(data);
          break;

        case 'comment:create':
          await createComment(data);
          break;

        default:
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function createPost(post) {
  const now = new Date();
  const data = {
    postId: post._id,
    post,
    comments: [],
    createdAt: now.toISOString()
  };
  const query = new Query(data);

  try {
    await query.save();
  } catch (error) {
    console.error(error);
  }
}

async function createComment(comment) {
  const { postId } = comment;
  let query = null;

  try {
    query = await Query.findOne({ postId });
    if(query) {
      query.comments.push(comment);
      await query.save();
    } else {
      console.error(`Could not find the record with ${postId}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export const handler = middy(eventConsumer);