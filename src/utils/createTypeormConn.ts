import { getConnectionOptions, createConnection, Connection, getConnection } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: "default" });
};

const connectionString = "chinook-" + (process.env.NODE_ENV || "production");
export const getChinookConnection = async () => {
  let conn: Connection;
  try{
      conn = await getConnection(connectionString)
  }
  catch(error){
      conn = await createConnection(connectionString);
  }
  return conn
}