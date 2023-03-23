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
    // https://kafka.js.org/docs/consuming  - fromBeginning
    await consumer.subscribe({ topic: topic });//, fromBeginning: true

    // let data = [];
    await consumer.run({
        eachMessage: async ({ message }) => {
          await connector.getMessage(message.value.toString())
        },
      });
    // await consumer.run({
    //     eachMessage: async ({ message }) => {            
    //         // const response = await connector.get_message(message.value.toString())
    //         // console.log(response)
    //         // dbResponse.push(response)
    //         // console.log(dbResponse)

    //         // let promise = new Promise((resolve, reject) => {
    //         //     resolve(dbResponse.push(connector.get_message(message.value.toString())))
    //         // })
    //         // promise.then(() => {console.log(`consumer.run() dbResponse: ${dbResponse}`)})
    //     }
    // });
    // return data;
};

module.exports = { run }

// await consumer.run({
//     eachMessage: async ({ message }) => {
//         return await connector.get_message(message.value.toString())
//     }
// });