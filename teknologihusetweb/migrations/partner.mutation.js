
const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_API_DATASET;
const token = process.env.SANITY_TOKEN_MUTATION;

const data = [
    {
        _key: "3ea88bba0b61",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-46126638e89457d976d3d524ff05c9256775e31c-595x842-svg",
                _type: "reference"
            }
        },
        partner_name: "NAV",
        partner_visibility: true,
        partner_web: "http://nav.no"
    },
    {
        _key: "42b32e8ecb04",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-e608d80b4623f982d0f44034f7561e258397728d-163x43-svg",
                _type: "reference"
            }
        },
        partner_name: "Accenture",
        partner_visibility: true,
        partner_web: "https://accenture.no"
    },
    {
        _key: "1e8bceae6e81",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-417991b808b238acf39e1948fd31441726abb46e-595x842-svg",
                _type: "reference"
            }
        },
        partner_name: "Bekk",
        partner_visibility: true,
        partner_web: "https://bekk.no"
    },
    {
        _key: "af57a0782a6d",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-d64f859ef5dbc6b3ed32f07768cf67832bc22aa9-300x220-svg",
                _type: "reference"
            }
        },
        partner_name: "Arktekk",
        partner_visibility: true,
        partner_web: "https://arktekk.no"
    },
    {
        _key: "3c24b2ebd30c",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-956f5d2600248495234eed8517fc94b7168626d4-3350x1614-svg",
                _type: "reference"
            }
        },
        partner_name: "Bouvet",
        partner_visibility: true,
        partner_web: "https://bouvet.no"
    },
    {
        _key: "9c23d52ea599",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-4580b1f1139d448dc21023f8eef1b7b19d9a7fcd-842x595-svg",
                _type: "reference"
            }
        },
        partner_name: "javaBin",
        partner_visibility: true,
        partner_web: "https://java.no"
    },
    {
        _key: "1550aafefdc6",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-f4b9c690d1ea765352d9e6a7b66e39b58ebbb50f-842x595-svg",
                _type: "reference"
            }
        },
        partner_name: "Knowit",
        partner_visibility: true,
        partner_web: "https://knowit.no"
    },
    {
        _key: "8e50ab3a87b9",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-b9bde45b8fe9f2f95e885a1e97bc488165014be2-648x216-svg",
                _type: "reference"
            }
        },
        partner_name: "Kodemaker",
        partner_visibility: true,
        partner_web: "https://kodemaker.no"
    },
    {
        _key: "29be50ba1c84",
        _type: "partner_element",
        partner_logo_image: {
            _type: "image",
            asset: {
                _ref: "image-348748fe0ed524b71e9ed7f1da3dd252de9246fa-633x263-svg",
                _type: "reference"
            }
        },
        partner_name: "Kantega",
        partner_visibility: true,
        partner_web: "https://kantega.no"
    }
];

const mutations = data.map(el => {
    return {
        create: {
            _type: 'partner',
                partner_name: el.partner_name,
                partner_web: el.partner_web,
                partner_logo_image: el.partner_logo_image,
                partner_visibility: el.partner_visibility,
        }
    }
})

fetch(`https://${projectId}.api.sanity.io/v2022-06-12/data/mutate/${dataset}`, {
    method: 'post',
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({mutations})
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
