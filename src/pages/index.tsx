import FrontPage from "../components/frontpage/FrontPage";
import React from "react";
import th from "../core/client/client";

export interface Props {
  pageContent: any;
  bannerContent: any;
}

export async function getServerSideProps() {
  const frontPageQuery = `
      {
        "frontpageTop": *[ _type == "texts_frontpage_top"][0],
        "frontpageMatrix": *[ _type == "texts_frontpage_content_matrix"][0],
        "frontpageSpotlight": *[ _type == "texts_frontpage_spotlight"][0]
      }
    `;

  const frontpageContent = await th
    .sanity()
    .fetch(frontPageQuery)
    .then((value) => value)
    .catch((reason) => console.error(reason));

  const bannerQuery = `
      *[ _type == 'texts_frontpage_banner' ] { frontpage_header, frontpage_subheader, frontpage_action_btn_label, frontpage_header_logo }
    `;

  const bannerContent = await th
    .sanity()
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
