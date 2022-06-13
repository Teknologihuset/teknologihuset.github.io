// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import menu from "./menu";
import menuElement from "./menu-element";
import page from "./page";
import section from "./section";
import texts_frontpage_banner from "./texts/frontpage-banner";
import texts_frontpage_content from "./texts/frontpage-content";
import partner from "./partners";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      menuElement,
      menu,
      page,
      //section,
      partner,
      texts_frontpage_banner,
      texts_frontpage_content
  ]),
})
