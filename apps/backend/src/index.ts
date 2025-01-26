import { handle } from "hono/aws-lambda";
import app from "./app";

const handler = handle(app);

export default handler;
