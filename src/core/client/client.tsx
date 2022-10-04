import sanityClient, { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Environment } from "../external/Environment";

export interface Client {
  sanity: () => SanityClient;
  imageUrl: (source: string) => string;
  imageUrlWithSize: (source: string, width: number, height: number) => string;
}

console.log(process.env);

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID!!;
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET!!;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN!!;

if (!projectId) throw new Error("ProjectId has not been defined.");
if (!dataset) throw new Error("Dataset has not been defined.");

let config: any = {
  projectId,
  dataset,
  apiVersion: "2022-06-11",
  useCdn: true,
};

if (Environment.isDevelopment) {
  config = { ...config, token };
}

const sanityClientTeknologihuset = sanityClient(config);
const builder = imageUrlBuilder(sanityClientTeknologihuset);

const th: Client = {
  sanity: (): SanityClient => sanityClientTeknologihuset,
  imageUrl: (source: string): string =>
    builder.image(source).auto("format").url(),
  imageUrlWithSize: (source: string, width: number, height: number): string =>
    builder.width(width).height(height).image(source).url(),
};

export const getImage = (image: string, defaultImg: string = "") => {
  try {
    return th.imageUrl(image);
  } catch (e) {
    return defaultImg;
  }
};
export const getText = (text: string, defaultText: string = "") => {
  return text ?? defaultText;
};

export default th;
