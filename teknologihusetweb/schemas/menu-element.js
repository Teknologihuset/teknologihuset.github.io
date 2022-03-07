export default {
    name: "menu_element",
    title: "Meny elementer",
    type: "object",
    fields:[
        {
            title: "Tittel",
            description: "Skriv inn hvilken tekst som skal vises på menyen.",
            name: "element_label",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Navigerings-lenke",
            description: "Skriv inn en relativ lenke som skal brukes når menyen lages. (eks; /home, /aboutus, osv.)",
            name: "element_href",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: 'Lenke til en side',
            description: "Valgfritt felt: Velg en side som menyen skal lenke til.",
            name: 'element_page_href',
            type: 'reference',
            to: [{type: 'page'}]
        }
    ]
}