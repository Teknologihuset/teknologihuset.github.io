
export default {
    name: "section",
    title: "Section",
    type: "document",
    fields: [
        {
            title: 'Side',
            name: 'section_page_ref',
            type: 'reference',
            to: [{type: 'page'}]
        },
        {
            title: 'Styles',
            name: 'styles',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'grid',
                list: [
                    {title: 'Style 1', value: 'style1'},
                    {title: 'Style 2', value: 'style2'},
                    {title: 'Style 3', value: 'style3'},
                    {title: 'Style 4', value: 'style4'},
                    {title: 'Special', value: 'special'},
                    {title: 'Wrapper', value: 'wrapper'},
                    {title: 'Inner', value: 'inner'}
                ]
            }
        }
    ]
}