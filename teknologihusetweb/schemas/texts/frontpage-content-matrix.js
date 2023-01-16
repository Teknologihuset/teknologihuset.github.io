import {makeMatrixRowModel} from "./Metamodeller";

export default {
    name: "texts_frontpage_content_matrix",
    title: "Tekster",
    type: "document",
    fieldsets: [
        {name: "e1", title: 'Element 1', options: {collapsible: true, collapsed: true}},
        {name: 'e2', title: 'Element 2', options: {collapsible: true, collapsed: true}},
        {name: 'e3', title: 'Element 3', options: {collapsible: true, collapsed: true}}
    ],
    fields: [
        {
            title: "Tittel",
            name: "frontpage_content_matrix_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            initialValue: "Rebel // Teknologihuset",
            validation: Rule => Rule.required()
        },
        {
            title: "Undertittel",
            name: "frontpage_content_matrix_subheader",
            type: "string",
            options: {
                maxLength: 200,
            },
            initialValue: "Bli kjent med Teknologihuset på Rebel",
            validation: Rule => Rule.required()
        },
        ...makeMatrixRowModel(
            "element1",
            "Element 1 - Overskrift",
            "Teknologihusets partnere",
            200,
            "Element 1 - Tekst",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Element 1 - Bilde",
            "Element 1 - Knapp tittel",
            100,
            "Les mer",
            "Element 1 - Knapp Url",
            "Element 1 - Knapp Synlighet",
            "e1"
        ),
        ...makeMatrixRowModel(
            "element2",
            "Element 2 - Overskrift",
            "Rebel-bygget",
            200,
            "Element 2 - Tekst",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Element 2 - Bilde",
            "Element 2 - Knapp tittel",
            100,
            "Les mer",
            "Element 2 - Knapp Url",
            "Element 2 - Knapp Synlighet",
            "e2"
        ),
        ...makeMatrixRowModel(
            "element3",
            "Element 3 - Overskrift",
            "Fasiliteter",
            200,
            "Element 3 - Tekst",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Element 3 - Bilde",
            "Element 3 - Knapp tittel",
            100,
            "Les mer",
            "Element 3 - Knapp Url",
            "Element 3 - Knapp Synlighet",
            "e3"
        ),
        {
            title: "Undertekst",
            description: "Teksten som vises under matrisen",
            name: "frontpage_content_matrix_description_text",
            type: "text",
            validation: Rule => Rule.required(),
            initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis."
        },
        {
            title: "Undertekst - Knapp tittel",
            name: `frontpage_content_matrix_description_btn_label`,
            type: "string",
            options: {
                maxLength: 100,
            },
            initialValue: "Les mer"
        },
        {
            title: "Undertekst - Knapp Url",
            name: `frontpage_content_matrix_description_btn_url`,
            type: "url",
            initialValue: "https://teknologihuset.no",
        },
        {
            title: "Undertekst - Knapp Synlighet",
            name: `frontpage_content_matrix_description_btn_visibility`,
            type: "boolean",
            initialValue: true,
            description: "Velg false for å skjule knappen, eller true for å vise den."
        },
    ]
}