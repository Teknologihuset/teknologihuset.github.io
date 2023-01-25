import FrontPage from "../components/frontpage/FrontPage";
import React from "react";
import {sanityClient} from "../lib/sanity.server";

export interface Props {
    pageContent: any;
    bannerContent: any;
}

export async function getStaticProps() {
    const frontPageQuery = `
      {
        "frontpageTop": *[ _type == "texts_frontpage_top"][0],
        "frontpageMatrix": *[ _type == "texts_frontpage_content_matrix"][0],
        "frontpageSpotlight": *[ _type == "texts_frontpage_spotlight"][0],
        "frontpageContact": *[ _type == "texts_frontpage_contact"][0],
        "frontpagePartners": {
            "texts": *[ _type == "texts_frontpage_partners"][0],
            "partnerList": *[ _type == "partner"]
         }
      }
    `;

    const frontpageContent = await sanityClient
        .fetch(frontPageQuery)
        .then((value) => value)
        .catch((reason) => console.error(reason));

    const bannerQuery = `
      *[ _type == 'texts_frontpage_banner' ] 
      { 
        frontpage_header, 
        frontpage_subheader, 
        frontpage_action_btn_label, 
        frontpage_header_logo 
      }
    `;

    const bannerContent = await sanityClient
        .fetch(bannerQuery)
        .then((value) => value.pop())
        .catch((reason) => console.error(reason));

    return {
        props: {
            bannerContent,
            pageContent: frontpageContent,
        },
    };
}

export default function (props: Props) {
    return <FrontPage {...props} />;
}
