import sanityClient from "part:@sanity/base/client";

class Migration {
    #apiVersion;
    #query;
    #patch;
    #client;

    withApiVersion(apiVersion) {
        this.#apiVersion = apiVersion;
        return this;
    }

    withQuery(query) {
        this.#query = query;
        return this;
    }

    withPatch(patch) {
        this.#patch = patch;
        return this;
    }

    static createClient = (apiVersion) => {
        if (!apiVersion) throw new Error("You must provide an api version.");
        return sanityClient.withConfig({ apiVersion });
    }

    static fetchDocuments = (query) => {
        return this.#client.fetch( query );
    }

    static createPatches = (patch, docs) => {
        const hasId = (doc) => !doc._id ? throw new Error("Document doesn't have an id property.") : doc._id;
        const hasRev = (doc) => !doc._rev ? throw new Error("Document doesn't have a revision property.") : doc._rev;

        return docs.map((doc) => {
            hasId(doc);
            hasRev(doc);

            return {
                id: doc._id,
                patch
            }
        });
    }

    #createTransaction = (patches) => {
        const transaction = this.#client.transaction();
        for (const patch in patches) {
            transaction.patch(patch.id, patch.patch);
        }
        return transaction;
    }

    // Commit changes to the database
    #commitTransaction = (transaction) => transaction.commit();

    // Orchestrate the migration
    #migrateNextBatch = async (query, patch) => {
        const documentsToUpdate = await Migration.fetchDocuments(query);

        if (documentsToUpdate.length === 0) {
            console.info("Migration is finished!")
            return null;
        }

        const patches = await Migration.createPatches(patch, documentsToUpdate);

        console.info(`Migrating ${documentsToUpdate.length} document(s)…`);

        const transaction = this.#createTransaction(patches);
        await this.#commitTransaction(transaction);
        return this.#migrateNextBatch();
    }

    async migrate() {
        this.#client = Migration.createClient(this.#apiVersion);

        try {
            await this.#migrateNextBatch(this.#query, this.#patch);
        } catch (e) {
            console.error("Something failed", e);
        }
    }
}

export default Migration;



/**
 * Based on a version by https://www.selbekk.io/blog/migrating-your-data-with-sanity-exec
 */