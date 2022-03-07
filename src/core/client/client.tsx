import sanityClient, {SanityClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";

export interface Client {
    sanity: () => SanityClient;
    imageUrlFor: (source: string) => ImageUrlBuilder;
}

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID || undefined
const dataset = process.env.SANITY_STUDIO_API_DATASET || undefined

if (!projectId) throw new Error("ProjectId has not been defined.");
if (!dataset) throw new Error("Dataset has not been defined.");

const sanityClientTeknologihuset = sanityClient({
    projectId,
    dataset,
});

const builder = imageUrlBuilder(sanityClientTeknologihuset);

const TeknologihusetClient: Client = {
    sanity: function (): SanityClient {
        return sanityClientTeknologihuset;
    },
    imageUrlFor: function (source: string): ImageUrlBuilder {
        return builder.image(source);
    }
}

export default TeknologihusetClient