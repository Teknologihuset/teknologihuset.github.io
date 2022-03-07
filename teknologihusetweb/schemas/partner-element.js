
export default {
    name: "partner_element",
    title: "Partner info",
    type: "object",
    fields: [
        {
            title: "Navn",
            name: "partner_name",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
        },
        {
            title: "Nettside",
            name: "partner_web",
            type: "url",
            validation: Rule => Rule.required()
        },
        {
            title: "Logo",
            name: "partner_logo_image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            title: "Synlighet",
            name: "partner_visibility",
            type: "boolean",
            description: "Partnerens logo vises på teknologihuset.no dersom valgt.",
            initialValue: true
        },
    ]
}