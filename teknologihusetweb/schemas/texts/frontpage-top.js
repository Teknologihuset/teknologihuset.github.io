
export default {
    name: "texts_frontpage_top",
    title: "Tekster",
    type: "document",
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    //__experimental_actions: ['create', 'update', 'delete', 'publish'],
    fields: [
        {
            title: "Seksjon 1 - Overskrift",
            name: "frontpage_booking_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Teknologihuset - House of Communities"
        },
        {
            title: "Seksjon 1 - Under-overskrift",
            name: "frontpage_booking_subheader",
            type: "text",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis."
        },
        {
            title: "Booking - Overskrift",
            name: "frontpage_booking_description_header",
            type: "string",
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
            initialValue: "Booking"
        },
        {
            title: "Booking - Tekst",
            name: "frontpage_booking_description_text",
            type: "text",
            validation: Rule => Rule.required(),
            initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis."
        },
        {
            title: "Logo",
            name: "frontpage_booking_description_logo",
            type: "image",
            validation: Rule => Rule.required(),
        },
        {
            title: "Booking - Knapp tittel",
            name: "frontpage_booking_btn_label",
            type: "string",
            options: {
                maxLength: 100,
            },
            initialValue: "Les mer"
        },
        {
            title: "Booking - Url",
            name: "frontpage_booking_btn_url",
            type: "url",
            initialValue: "https://",
            validation: Rule => Rule.required()
        },
        {
            title: "Booking knapp - Synlighet",
            name: "frontpage_booking_btn_label_visibility",
            type: "boolean",
            initialValue: true
        },
        {
            title: "Booking - Tekst 2",
            name: "frontpage_booking_description2",
            type: "text",
            validation: Rule => Rule.required(),
            initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis."
        },
        {
            title: "Booking - Knapp 2 tittel",
            name: "frontpage_booking_btn2_label",
            type: "string",
            options: {
                maxLength: 100,
            },
            initialValue: "Les mer"
        },
        {
            title: "Booking knapp 2 - Synlighet",
            name: "frontpage_booking_btn2_label_visibility",
            type: "boolean",
            initialValue: true
        },
    ]
}