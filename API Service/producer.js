const { Kafka, Partitioners } = require('kafkajs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const clientId = process.env.KAFKA_CLIENT_ID;
const brokers = [process.env.KAFKA_DEFAULT_BROKER];
const topic = process.env.KAFKA_MOCKUP_TOPIC;

const kafka = new Kafka({ clientId: clientId, brokers: brokers});
const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner,
  });

async function run(message) {
    await producer.connect()
    await producer.send({topic: topic, messages: [{value: message}] })
}
module.exports = { run }