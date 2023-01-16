import {defineConfig, definePlugin} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas/schema'
import deskStructure from './sanity-structure'
import {crossDatasetDuplicator} from '@sanity/cross-dataset-duplicator'

const sharedConfig = definePlugin({
    name: 'teknologihuset-web',
    title: 'TeknologihusetWeb',

    plugins: [
        deskTool({
            structure: deskStructure
        }),
        visionTool(),
        crossDatasetDuplicator({
            types: ["partnere", "partnerlist", "partner_element"],
            tool: true,
            follow: []
            //filter: '_type != "product"',
        })
    ],

    tools: (prev) => {
        if (import.meta.env.DEV) {
            return prev
        }
        return prev.filter((tool) => tool.name !== 'vision')
    },

    schema: {
        types: schemaTypes,
    },

    document: {
        newDocumentOptions: (prev, { creationContext }) => {
            if (creationContext.type === 'global') {
                return prev.filter((item) => ![
                        'menu',
                        'texts_frontpage_banner',
                        'texts_frontpage_top',
                        'texts_frontpage_content_matrix',
                        'texts_frontpage_spotlight',
                        'texts_frontpage_contact',
                        'texts_frontpage_partners'
                    ].includes(item.templateId))
            }
            return prev
        },
        actions: (prev, { schemaType }) => {
            if ([
                'menu',
                'texts_frontpage_banner',
                'texts_frontpage_top',
                'texts_frontpage_content_matrix',
                'texts_frontpage_spotlight',
                'texts_frontpage_contact',
                'texts_frontpage_partners'
            ].includes(schemaType)) {
                return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
            }
            return prev
        },
    },
})

export default defineConfig([
    {
        name: "production",
        title: "Prod",
        default: true,
        basePath: '/production',
        projectId: 'q7ujq3cx',
        dataset: 'production',
        plugins: [sharedConfig()]
    },
    {
        name: "development",
        title: "Development",
        basePath: '/development',
        projectId: 'q7ujq3cx',
        dataset: 'development',
        plugins: [sharedConfig()]
    }
])
