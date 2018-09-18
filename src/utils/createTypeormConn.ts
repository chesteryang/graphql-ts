import { getConnectionOptions, createConnection, Connection, getConnection } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: "default" });
};

export const getChinookConnection = async () => {
  let conn: Connection;
  try{
      conn = await getConnection("chinook")
  }
  catch(error){
      conn = await createConnection("chinook");
  }
  return conn
}