
export default {
    name: "texts_frontpage_partners",
    title: "Tekster",
    type: "document",
    fields: [
        {
            title: "Overskrift",
            name: "frontpage_partner_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required()
        },
        {
            title: "Underoverskrift",
            name: "frontpage_partner_subheader",
            type: "text",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required()
        }
    ]
}