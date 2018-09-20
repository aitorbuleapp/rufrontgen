import { getConnectionOptions, createConnection } from "typeorm";
import { User } from "../models/User";
import { Listing } from "../models/Listing";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...connectionOptions,
        url: process.env.DATABASE_URL as string,
        entities: [User, Listing],
        name: "default"
      } as any)
    : createConnection({ ...connectionOptions, name: "default" });
};