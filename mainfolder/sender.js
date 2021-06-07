// asynchronous message queuing protocol
// const amqp = require("amqplib");
var amqp = require("amqplib/callback_api");
var count = 1;

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = "hello";
    var msg = "Hello world";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" Sent %s", msg);
  });
});

setTimeout(function () {
  // connection.close();
  process.exit(0);
}, 5000);

// setInterval(function () {
//   var test_message = "msg " + count;
//   sendMessage(connection, "queue", test_message);
//   count += 1;
// }, 5000);

///calling the fucntion
// connect();
//building up the connection with the server .....for rabbit mq...

// const msg = { number: 19 };
// async function connect() {
//   try {
//     const connection = await amqp.connect("amqp://localhost:5672");
//     const channel = await connection.createChannel();
//     //this assert queue will make sure that the queue exits ...and if not it will get created for u ....
//     const result = await channnel.assertQueue("jobs");
//     channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
//     console.log(`yes your jobs is send successfully ${msg.number}`);
//   } catch (e) {
//     console.log(e);
//   }
// }
