
export default {
    name: "partnere",
    title: "Partnere",
    type: "document",
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: "Partner liste",
            description: "Her kan du legge til eller fjerne partnere.",
            name: "partner_list",
            type: 'array',
            of: [{type: 'partner_element'}]
        }
    ]
}