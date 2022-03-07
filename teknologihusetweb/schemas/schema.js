// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import menu from "./menu";
import menuElement from "./menu-element";
import page from "./page";
import section from "./section";
import partner from "./partner";
import partnerElement from "./partner-element";
import frontpage from "./texts/frontpage";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      menuElement,
      menu,
      page,
      //section,
      partnerElement,
      partner,
      frontpage
  ]),
})
