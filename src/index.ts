import { Server } from "./server/server";

( (): void => {
  const server = new Server();
  server.start();
} )();