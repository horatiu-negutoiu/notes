// send.js

import { connect } from `amqplib`;

const connection = await connect(`amqp://localhost`);
const channel = await connection.createChannel();
const queue = 'my-queue';
channel.assertQueue(queue, { durable: false }); // queues can be durable (stored on disk) or transient (stored in memory, lost if RabbitMQ restarts)

const message = 'Hello World!';
channel.sendToQueue(queue, Buffer.from(message));


// receive.js

import { connect } from `amqplib`;

const connection = await connect(`amqp://localhost`);
const channel = await connection.createChannel();
const queue = 'my-queue';
channel.assertQueue(queue, { durable: false });

// callback function to handle messages
const handleMessage = (msg) => {
  console.log(`Received message: ${msg.content.toString()}`);
};

channel.consume(queue, handleMessage, { noAck: true }); // noAck: true means that RabbitMQ will remove the message from the queue once it has been delivered
