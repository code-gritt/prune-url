import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString =
  "postgresql://neondb_owner:npg_x9XRBOMfTdb6@ep-dark-cloud-aanvdo1h-pooler.westus3.azure.neon.tech/prune-url-database?sslmode=require&channel_binding=require";

const client = postgres(connectionString, {
  prepare: false,
});

export const db = drizzle(client, { schema });

export { eq, and, or, like, desc, asc } from "drizzle-orm";
