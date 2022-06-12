
export default {
    name: "partner",
    title: "Partnere",
    type: "document",
    __experimental_actions: ['create', 'update', 'delete', 'publish'],
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
            title: "Nettside (url)",
            name: "partner_web",
            type: "url",
            initialValue: "https://",
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