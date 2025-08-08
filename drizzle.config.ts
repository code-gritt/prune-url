import { Config, defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_x9XRBOMfTdb6@ep-dark-cloud-aanvdo1h-pooler.westus3.azure.neon.tech/prune-url-database?sslmode=require&channel_binding=require",
  },
}) satisfies Config;
