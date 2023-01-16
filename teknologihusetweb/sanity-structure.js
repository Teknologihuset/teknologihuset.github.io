const hiddenDocTypes = listItem => ![
    "menu",
    "texts_frontpage_banner",
    "texts_frontpage_top",
    "texts_frontpage_content_matrix",
    "texts_frontpage_spotlight",
    "texts_frontpage_contact",
    "texts_frontpage_partners"
].includes(listItem.getId())

export default (S) => S.list()
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
                                    .title("Forside - Partnere")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_partners")
                                            .documentId("texts_frontpage_partners")
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
                                S.listItem()
                                    .title("Forside - Kontakt")
                                    .child(
                                        S.editor()
                                            .schemaType("texts_frontpage_contact")
                                            .documentId("texts_frontpage_contact")
                                    ),
                            ])
                    ),
                S.divider(),
                ...S.documentTypeListItems().filter(hiddenDocTypes)
            ]
        );