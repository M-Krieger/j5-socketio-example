# j5-socketio-example

This is a simple repository demonstrating an error I'm facing with johnny-five, socket.io and express.

This project enables controlling two servos hooked up to an Arduino controlled by a local hosted website. Simply do a `npm install` and start the server with `node server.js` afterwards. To control the Servos open up a new browser window and visit http://localhost:3001. 

I clicked sweep several times and controlled both wheels with the wheels rangeslider. Suddenly the server isn't responding anymore and the node process quits. I tried this too on a Raspberry Pi B+, added an external power supply but still my server crashes.

This is my server.js log:
```
node server.js
Server running on http://localhost:3001
1508591951267 Available /dev/cu.wchusbserial14330
1508591951281 Connected /dev/cu.wchusbserial14330
1508591954983 Repl Initialized
>> Board ready
a user connected
a user connected
sweep
sweep
sweep
sweep
sweep
sweep
sweep
sweep
sweep
sweep
sweep
sweep
wheels -0.1
wheels -0.05
wheels 0
wheels -0.05
wheels -0.3
wheels -0.5
wheels -0.7
wheels -0.85
wheels -0.95
[1]    37116 abort      node server.js
```
