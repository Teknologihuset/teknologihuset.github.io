import { Environment } from "../core/external/Environment";
import { ClientConfig } from "next-sanity";

const config: ClientConfig = {
  projectId:
    process.env.SANITY_STUDIO_API_PROJECT_ID ??
    process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  dataset:
    process.env.SANITY_STUDIO_API_DATASET ??
    process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  apiVersion: "2023-01-15",
  useCdn: true,
  ...(Environment.isDevelopment && {
    token: process.env.SANITY_TOKEN,
  }),
};

console.log(config);

export { config }