import { Server } from "http";
import { startServer } from "../startServer";
import { AddressInfo } from "net";

export default async function() {
    const app: Server = await startServer() as Server;
    const { port } = app.address() as AddressInfo;
    process.env.TEST_HOST = `http://127.0.0.1:${port}`;
}