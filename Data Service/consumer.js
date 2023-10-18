const { Kafka } = require("kafkajs");
const connector = require('./connector');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const clientId = process.env.KAFKA_CLIENT_ID;
const brokers = [process.env.KAFKA_DEFAULT_BROKER];
const topic = process.env.KAFKA_MOCKUP_TOPIC;

const kafka = new Kafka({ clientId: clientId, brokers: brokers });
const consumer = kafka.consumer({ groupId: clientId });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: topic });
  await consumer.run({
    eachMessage: async ({ message }) => {
      await connector.getMessage(message.value.toString())
    },
  });
};

module.exports = { run }