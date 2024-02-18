// Import the WebSocket module
const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Event listener for WebSocket connections
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Event listener for messages from clients
  ws.on('message', function incoming(message) {
    console.log('Received message:', message);

    // Echo the received message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Event listener for WebSocket disconnections
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on port 8080');




