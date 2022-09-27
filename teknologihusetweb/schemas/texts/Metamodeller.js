
export function makeMatrixRowModel(
    key,
    header,
    headerDefault,
    headerLength,
    textLabel,
    textDefault,
    imageLabel,
    bntLabel,
    bntLabelLength,
    bntLabel_InitText,
    bntLabelUrl,
    bntVisibility,
    fieldsetName) {
    return [
        {
            title: header,
            name: `frontpage_content_matrix_${key}_header`,
            type: "string",
            options: {
                maxLength: headerLength,
            },
            validation: Rule => Rule.required(),
            initialValue: headerDefault,
            fieldset: fieldsetName
        },
        {
            title: textLabel,
            name: `frontpage_content_matrix_${key}_text`,
            type: "text",
            validation: Rule => Rule.required(),
            initialValue: textDefault,
            fieldset: fieldsetName
        },
        {
            title: imageLabel,
            name: `frontpage_content_matrix_${key}_image`,
            type: "image",
            validation: Rule => Rule.required(),
            fieldset: fieldsetName
        },
        {
            title: "Bilde posisjon",
            description: "True: tekst til venstre, bilde til høyre. False: bilde til venstre.",
            name: `frontpage_content_matrix_${key}_image_position`,
            type: "boolean",
            validation: Rule => Rule.required(),
            fieldset: fieldsetName,
            initialValue: true
        },
        {
            title: bntLabel,
            name: `frontpage_content_matrix_${key}_btn_label`,
            type: "string",
            options: {
                maxLength: bntLabelLength,
            },
            initialValue: bntLabel_InitText,
            fieldset: fieldsetName
        },
        {
            title: bntLabelUrl,
            name: `frontpage_content_matrix_${key}_btn_url`,
            type: "url",
            initialValue: "https://",
            validation: Rule => Rule.required(),
            fieldset: fieldsetName
        },
        {
            title: bntVisibility,
            name: `frontpage_content_matrix_${key}_btn_visibility`,
            type: "boolean",
            initialValue: true,
            fieldset: fieldsetName,
            description: "Velg false for å skjule knappen, eller true for å vise den."
        },
    ]
}