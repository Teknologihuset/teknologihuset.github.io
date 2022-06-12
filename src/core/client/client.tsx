import sanityClient, {SanityClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";

export interface Client {
    sanity: () => SanityClient;
    imageUrlFor: (source: string) => ImageUrlBuilder;
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
    imageUrlFor: (source: string): ImageUrlBuilder => builder.image(source).auto('format')
}

export default th