import { Elysia } from "elysia";
import gen from "./read";

const app = new Elysia();

app.get("/", () => "Hello")

app.get('/quote/:id', () => new Response(
  JSON.stringify({
      'quote': [
          gen.next().value
      ]
  }), {
      headers: {
          'Content-Type': 'application/json'
      }
  })
)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
