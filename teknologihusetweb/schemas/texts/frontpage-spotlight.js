
export default {
    name: "texts_frontpage_spotlight",
    title: "Tekster",
    type: "document",
    fields: [
        {
            title: "Spotlight Overskrift",
            name: "frontpage_spotlight_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Communities"
        },
        {
            title: "Spotlight tekst",
            name: "frontpage_spotlight_text",
            type: "text",
            options: {
                maxLength: 1000,
            }
        },
        {
            title: "Spotlight Knapp - Tittel",
            name: "frontpage_spotlight_btn_label",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Les mer"
        },
        {
            title: "Spotlight Knapp - Url",
            name: "frontpage_spotlight_btn_url",
            type: "url",
            initialValue: "https://teknologihuset.no",
            validation: Rule => Rule.required()
        },
        {
            title: "Spotlight Knapp - Synlighet",
            name: "frontpage_spotlight_btn_visibility",
            type: "boolean",
            initialValue: true
        },
    ]
}