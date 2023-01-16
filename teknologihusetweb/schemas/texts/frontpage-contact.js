
export default {
    name: "texts_frontpage_contact",
    title: "Tekster",
    type: "document",
    fields: [
        {
            title: "Kontakt Overskrift",
            name: "frontpage_contact_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Kontakt"
        },
        {
            title: "Kontakt tekst",
            name: "frontpage_contact_text",
            type: "text",
            options: {
                maxLength: 1000,
            },
            initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis."
        },
        {
            title: "Kontakt Twitter - Url",
            name: "frontpage_contact_twitter_url",
            type: "url",
            initialValue: "https://teknologihuset.no"
        },
        {
            title: "Kontakt Instagram - Url",
            name: "frontpage_contact_instagram_url",
            type: "url",
            initialValue: "https://teknologihuset.no"
        },
        {
            title: "Kontakt Snapchat - Url",
            name: "frontpage_contact_snapchat_url",
            type: "url",
            initialValue: "https://teknologihuset.no"
        },
        {
            title: "Kontakt GitHub - Url",
            name: "frontpage_contact_github_url",
            type: "url",
            initialValue: "https://teknologihuset.no"
        }
    ]
}