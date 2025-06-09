import { serve } from "@hono/node-server";

import app from "./src/app.js";
import { config } from "./src/config.js";

serve({ fetch: app.fetch, port: config.PORT || 5000 }, (info) => {
  console.log(`Server is running on port:${info.port}`);
});
