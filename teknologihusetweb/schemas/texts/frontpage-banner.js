
export default {
    name: "texts_frontpage_banner",
    title: "Tekster",
    type: "document",
    fields: [
        {
            title: "Overskrift",
            name: "frontpage_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Teknologihuset"
        },
        {
            title: "Slagord",
            name: "frontpage_subheader",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Huset med IT-folk i sentrum"
        },
        {
            title: "Knapp tittel",
            name: "frontpage_action_btn_label",
            type: "string",
            options: {
                maxLength: 100,
            },
            initialValue: "Les mer"
        },
        {
            title: "Knapp href",
            name: "frontpage_action_btn_href",
            type: "string",
        },
        {
            title: "Logo",
            name: "frontpage_header_logo",
            type: "image",
            validation: Rule => Rule.required(),
        }
    ]
}