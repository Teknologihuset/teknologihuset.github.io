import sanityClient, {SanityClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {Environment} from "../external/Environment";

export interface Client {
    sanity: () => SanityClient;
    imageUrl: (source: string) => string;
    imageUrlWithSize: (source: string, width: number, height: number) => string;
}

const projectId: string = import.meta.env.SANITY_STUDIO_API_PROJECT_ID as string
const dataset: string = import.meta.env.SANITY_STUDIO_API_DATASET as string
const token: string = import.meta.env.SANITY_TOKEN as string

if (!projectId) throw new Error("ProjectId has not been defined.");
if (!dataset) throw new Error("Dataset has not been defined.");

let config: any = {
    projectId,
    dataset,
    apiVersion: '2022-06-11',
    useCdn: true
}

if (Environment.isDevelopment) {
    config = {...config, token}
}

const sanityClientTeknologihuset = sanityClient(config);
const builder = imageUrlBuilder(sanityClientTeknologihuset);

const th : Client = {
    sanity: (): SanityClient => sanityClientTeknologihuset,
    imageUrl: (source: string): string => builder.image(source).auto('format').url(),
    imageUrlWithSize: (source: string, width: number, height: number): string => builder.width(width). height(height).image(source).url()
}

export const getImage = (image: string, defaultImg: string = "") => {
    try {
        return th.imageUrl(image);
    } catch (e) {
        return defaultImg;
    }
}
export const getText = (text: string, defaultText: string = "") => {
    return text ?? defaultText;
}

export default th