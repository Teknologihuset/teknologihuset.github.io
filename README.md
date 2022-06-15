# Teknologihuset Web

This repo host updated webpages for Teknologihuset.

## How is Teknologihuset Web built?

Teknologihuset Web has to main parts:

- Teknologihuset Web: This is the root project and contains the main React/TypeScript application.
- Teknologihuset Sanity Studio: Contains the source code for the headless CMS in the `teknologihusetweb`folder. All content on Teknologihuset.no, including images, is served from Sanity. The CMS is custom-built using the schema's in the [schema folder](teknologihusetweb/schemas).

The production edition of Teknologihuset Sanity Studio runs at [https://teknologihuset.sanity.studio/](https://teknologihuset.sanity.studio/).

The Sanity Studio interface is custom-built to fit the needs of Teknologihuset. When developing and extending the main application, Teknologihuset Web, you must also make the necessary changes to Sanity Studio in order to reflect how the content is supposed to be served.

## How to setup:

1. Make sure you have Node & NPM installed: `npm -v`
2. Install the main application from the root folder: `npm install`
3. Install the Sanity CLI: `xxx`
4. Install the Sanity Studio application: `cd teknologihusetweb && npm install`

## How to run a dev environment locally:

1. Add a `.env` file: `touch .env`
2. Add the following content to it:

```
SANITY_STUDIO_API_PROJECT_ID=q7ujq3cx
SANITY_STUDIO_API_DATASET=development
SANITY_TOKEN=###
```

Replace `###` with the read-only Sanity token for Teknologihuset Web.

4. Run the dev server locally: `npm run dev`

With the above `.env` file, your local instance of Teknologihuset Web is served content from the `development` dataset.

## How to extend or make changes to Teknologihuset Sanity Studio

1. Add a new schema to the `schemas` folder within the `teknologihusetweb` folder.
2. If you are also changing the menu layout, make the necessary changes to the`sanity-structure`.js file.
3. If you need to make changes to the Sanity Studio settings, then edit the `sanity.json` file.
4. To see your changes in dev, run `sanity start`.
5. To deploy a new version to production, first run `sanity build` and then `sanity deploy`

It's possible to change the dataset from within Sanity Studio once the application is started.