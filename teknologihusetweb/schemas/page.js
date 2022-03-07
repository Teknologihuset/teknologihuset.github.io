export default {
    name: "page",
    title: "Side",
    type: "document",
    fields: [
        {
            title: "Overskrift",
            name: "page_header",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Banner bilde",
            name: "page_banner_image",
            type: "image"
        },
        {
            title: 'Innhold',
            name: 'page_content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}