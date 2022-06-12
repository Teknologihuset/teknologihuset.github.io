import sanityClient, {SanityClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export interface Client {
    sanity: () => SanityClient;
    imageUrl: (source: string) => string;
    imageUrlWithSize: (source: string, width: number, height: number) => string;
}

const projectId: string = import.meta.env.SANITY_STUDIO_API_PROJECT_ID as string
const dataset: string = import.meta.env.SANITY_STUDIO_API_DATASET as string

if (!projectId) throw new Error("ProjectId has not been defined.");
if (!dataset) throw new Error("Dataset has not been defined.");

const sanityClientTeknologihuset = sanityClient({
    projectId,
    dataset,
    apiVersion: '2022-06-11',
    useCdn: true
});

const builder = imageUrlBuilder(sanityClientTeknologihuset);

const th : Client = {
    sanity: (): SanityClient => sanityClientTeknologihuset,
    imageUrl: (source: string): string => builder.image(source).auto('format').url(),
    imageUrlWithSize: (source: string, width: number, height: number): string => builder.width(width). height(height).image(source).url()
}

export default th