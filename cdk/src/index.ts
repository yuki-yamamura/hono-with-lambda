import { handle } from "hono/aws-lambda";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello, Hono!",
  });
});

export const handler = handle(app);
