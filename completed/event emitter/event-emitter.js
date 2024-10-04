const EventEmiter = require("events");

const myEmitter = new EventEmiter();

// listener

myEmitter.on("birthday", () => {
  console.log(`Happy birthday to you`);
});
myEmitter.on("birthday", (gift) => {
  console.log(`I will send a gift to you for ${gift}`);
});

myEmitter.emit("birthday", "bike");
