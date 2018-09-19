import { GraphQLServer } from "graphql-yoga";
import { genSchema } from "./utils/genSchema";
import { createTypeormConn, getChinookConnection } from "./utils/createTypeormConn";

export const startServer = async () => {

  const conn = await getChinookConnection();
  const server = new GraphQLServer({
    schema: genSchema(),
    context: ({ request }) => ({
      url: request.protocol + "://" + request.get("host"),
      chinookConnection: conn
    })
   });
   
  await createTypeormConn();
  const port = process.env.PORT || 8030;
  const app = await server.start({
    port: process.env.NODE_ENV === "test" ? 0 : port
  });
  console.log(`Server is running on localhost: ${port}`);

  return app;
};