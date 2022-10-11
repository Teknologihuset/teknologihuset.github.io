import { Environment } from "../core/external/Environment";
import { ClientConfig } from "next-sanity";

export const config: ClientConfig = {
  projectId:
    process.env.SANITY_STUDIO_API_PROJECT_ID ??
    process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  dataset:
    process.env.SANITY_STUDIO_API_DATASET ??
    process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  apiVersion: "2022-06-11",
  useCdn: true,
  ...(Environment.isDevelopment && {
    token: process.env.SANITY_TOKEN,
  }),
};
