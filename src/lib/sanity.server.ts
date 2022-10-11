import { createClient } from "next-sanity";
import { config } from "./sanityconfig";

export const sanityClient = createClient(config);
