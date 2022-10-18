import {NextApiHandler, NextApiRequest, PageConfig} from "next";

import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook'

export const config: PageConfig = {
    api: {
        bodyParser: false
    }
}

const handler: NextApiHandler = async (req, res) => {
    const signature = req.headers[SIGNATURE_HEADER_NAME]
    if (!signature) {
        return res.status(401).send("Request missing signature")
    }
    const body = await readBody(req)
    if (!isValidSignature(body, signature as string, process.env.SANITY_WEBHOOK_SECRET!!)) {
        return res.status(401).send("Invalid signature")
    }
    await res.revalidate("/")
    return res.json({
        revalidated: true
    })
}

async function readBody(readable: NextApiRequest) {
    const chunks = []
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    return Buffer.concat(chunks).toString('utf8')
}

export default handler