// sanity.js
import { createClient } from "https://esm.sh/@sanity/client";

export const client = createClient({
  projectId: "nuyprr23",  // 你的專案ID
  dataset: "production",   // dataset
  apiVersion: "2026-01-01",
  useCdn: true,
});
