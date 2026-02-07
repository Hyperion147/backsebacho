import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a9s8gcg7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});