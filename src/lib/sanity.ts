import imageUrlBuilder from "@sanity/image-url";
import { config } from "./sanityconfig";

export const urlFor = (source: string) =>
  imageUrlBuilder({
    clientConfig: config,
  })
    .image(source)
    .auto("format")
    .url();

export const getImage = (image: string, defaultImg: string = "") => {
  try {
    return urlFor(image);
  } catch (e) {
    return defaultImg;
  }
};
export const getText = (text: string, defaultText: string = "") => {
  return text ?? defaultText;
};
