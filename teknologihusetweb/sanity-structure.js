import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
    "menu", "texts_frontpage_banner", "texts_frontpage_content"
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
                                    .title("Forside - Innhold")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_content")
                                            .documentId("texts_frontpage_content")
                                    ),
                            ])
                    ),
                S.divider(),
                ...S.documentTypeListItems().filter(hiddenDocTypes)
            ]
        );