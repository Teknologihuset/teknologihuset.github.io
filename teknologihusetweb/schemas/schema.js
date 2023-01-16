// First, we must import the schema creator
import menu from "./menu";
import menuElement from "./menu-element";
import page from "./page";
//import section from "./section";
import texts_frontpage_banner from "./texts/frontpage-banner";
import texts_frontpage_section_top from "./texts/frontpage-top";
import frontpageContentMatrix from "./texts/frontpage-content-matrix";
import texts_frontpage_spotlight from "./texts/frontpage-spotlight";
import texts_frontpage_contact from "./texts/frontpage-contact";
import texts_frontpage_partners from "./texts/frontpage-partners";
import partner from "./partners";

export default [
  menuElement,
  menu,
  page,
  //section,
  partner,
  texts_frontpage_banner,
  texts_frontpage_section_top,
  texts_frontpage_partners,
  texts_frontpage_spotlight,
  texts_frontpage_contact,
  frontpageContentMatrix,
]
