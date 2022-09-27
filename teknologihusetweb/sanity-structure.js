import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
    "menu",
    "texts_frontpage_banner",
    "texts_frontpage_top",
    "texts_frontpage_content_matrix",
    "texts_frontpage_spotlight"
].includes(listItem.getId())

export default () =>
    S.list()
        .title("Teknologihuset Web")
        .items(
            [
                S.listItem()
                    .title("Meny")
                    .child(
                        S.editor()
                            .schemaType("menu")
                            .documentId("menu")
                    ),
                S.listItem()
                    .title("Tekster")
                    .child(
                        S.list()
                            .title('Tekster')
                            .items([
                                S.listItem()
                                    .title("Forside - Banner")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_banner")
                                            .documentId("texts_frontpage_banner")
                                    ),
                                S.listItem()
                                    .title("Forside - Top")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_top")
                                            .documentId("texts_frontpage_top")
                                    ),
                                S.listItem()
                                    .title("Forside - Innholdsmatrise")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_content_matrix")
                                            .documentId("texts_frontpage_content_matrix")
                                    ),
                                S.listItem()
                                    .title("Forside - Spotlight")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_spotlight")
                                            .documentId("texts_frontpage_spotlight")
                                    ),
                            ])
                    ),
                S.divider(),
                ...S.documentTypeListItems().filter(hiddenDocTypes)
            ]
        );