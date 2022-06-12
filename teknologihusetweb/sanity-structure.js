import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
    "menu", "partnere","texts_frontpage"
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
                                            .schemaType("texts_frontpage")
                                            .documentId("texts_frontpage")
                                    )
                            ])
                    ),
                S.divider(),
                ...S.documentTypeListItems().filter(hiddenDocTypes)
            ]
        );