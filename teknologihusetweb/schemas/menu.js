export default {
    name: "menu",
    title: "Meny",
    type: "document",
    fields:[
        {
            title: "Overskrift",
            description: "Dette er overskriften på menyen som vises i grensesnittet.",
            name: "menu_header",
            type: "string",
            options: {
                maxLength: 100,
            },
            initialValue: "Meny",
            validation: Rule => Rule.required()
        },
        {
            title: "Meny elementer",
            description: "Her kan du lage nye, editere eller slette meny-elementer.",
            name: "menu_list",
            type: 'array',
            of: [{type: 'menu_element'}],
            initialValue: [
                {
                    element_label: "Home",
                    element_href: "/home"
                }
            ]
        }
    ],

}