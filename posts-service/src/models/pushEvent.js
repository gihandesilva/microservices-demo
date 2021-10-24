import { Kinesis } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const kinesis = new Kinesis({ apiVersion: '2013-12-02' });

async function pushEvent(event, data) {
    const payload = { event, data };
    try {
        await kinesis.putRecord({
            StreamName: process.env.KINESIS_STREAM_NAME,
            PartitionKey: uuidv4(),
            Data: JSON.stringify(payload),
        }).promise();
    } catch (error) {
        console.error(error);
    }
}

export default pushEvent;