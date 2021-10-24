import middy from '../middlewares/middy';
export * from '../models/mongooseDb';

async function eventConsumer(event, context) {
  try {
    for (const record of event.Records) {
      const payload = record.kinesis;
      const message = Buffer.from(payload.data, 'base64').toString();

      console.log(
        `Kinesis Message:
          partition key: ${payload.partitionKey}
          sequence number: ${payload.sequenceNumber}
          kinesis schema version: ${payload.kinesisSchemaVersion}
          data: ${message}
        `);

      // Do something
    }
  } catch (error) {
    console.log(error);
  }
}

export const handler = middy(eventConsumer);