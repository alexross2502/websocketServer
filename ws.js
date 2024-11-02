import { WebSocketServer } from "ws";
import WebSocket from "ws";
const server = http.createServer(app);

const wss = new WebSocketServer({ server });

export const sendMessageToClients = (message) => {
  console.log("test");
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      console.log("puf");
      const isCurrentUser = client.userLogin.login === message.login;
      client.send(JSON.stringify({ ...message, isCurrentUser }));
    }
  });
};
