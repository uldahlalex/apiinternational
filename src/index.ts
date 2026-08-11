import { serve } from "bun";
import index from "./index.html";
import type {MyRegisterForm} from "@/APITester.tsx";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/register": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async POST(req) {
        const json = (await req.json()) as MyRegisterForm
        if(json.password.length < 6) {
          return Response.json({
            message: 'should be 6 chars or more'
          })
        }
        if(!json.email.includes('@')) {
          return Response.json({
            message: 'that was not an email'
          })
        }
        return Response.json({
          message: "you have been registered",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
