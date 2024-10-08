import "./FrontPage.module.css";
import Banner from "../banner/Banner";
import Header from "../header/Header";
import Spotlight from "../spotlight/Spotlight";
import Content from "../content/Content";
import SpotlightImage from "../image/SpotlightImage";
import Loader from "../loader/Loader";
import ActionList, {Action} from "../content/ActionList";
import {Props} from "../../pages";
import {getImage, getText} from "../../lib/sanity";
import Partners from "../partners/Partners";
import Copyright from "../copyright/Copyright";

function FrontPage({pageContent: frontpageContent, bannerContent}: Props) {
    if (!frontpageContent) {
        return (
            <div id="wrapper">
                <Loader/>
            </div>
        );
    }

    return (
        <div id="wrapper">
            <Banner bannerContent={bannerContent}/>

            <section  id="about_th" className="wrapper thinwrapper style1 align-center">
                <div className="inner align-left">
                    <section>
                        <h3>
                            Teknologihuset i Oslo muliggjør kunnskapsdeling ved å tilby gratis rom, lokaler og saler helt gratis for alle communities som arrangerer åpne og fri fagmøter.
                        </h3>
                        <p>
                            Teknologihuset i Oslo er frivillig drevet av ildsjeler fra det norske fagmiljøet. Til sammen har vi over 20 års erfaring med å drive community-grupper og meetups, og vi vet derfor veldig godt hvor vanskelig det kan være å finne gode fasiliteter for å arrangere meetups. Ved å bruke Teknologihusets fasiliteter kan du slippe å betale eller leie dyre lokaler og du slipper ikke minst å føle deg tvunget til å bruke andres lokaler mot reklame av deres tjenester/produkter. Teknologihuset fortsetter å tjene Oslos community-grupper takket være våre fantastiske partnere. Lurer du på hvem de er? Sjekk hele listen <a href="#partnerlist">her</a>
                        </p>
                        <ActionList actions={
                            [
                                {
                                    href: "/about",
                                    label: "Les mer",
                                    visible: true
                                },

                            ]
                        } />
                    </section>
                </div>
            </section>

            <section id="info-teknologihuset" className="wrapper style1 special">
                <div className="inner">
                    <Header
                        size={2}
                        title={getText(
                            frontpageContent.frontpageMatrix.frontpage_content_matrix_header,
                            "Teknologihuset"
                        )}
                    >
                        {getText(
                            frontpageContent.frontpageMatrix
                                .frontpage_content_matrix_subheader,
                            "Bli kjent med Teknologihuset"
                        )}
                    </Header>

                    <Spotlight
                        imgAlign={
                            !frontpageContent.frontpageMatrix[
                                getMatrixElement("element1").imagePosition
                                ]
                                ? "left"
                                : "right"
                        }
                    >
                        <SpotlightImage
                            imgSrc={getImage(
                                frontpageContent.frontpageMatrix[
                                    getMatrixElement("element1").image
                                    ],
                                "/images/partnere.jpeg"
                            )}
                        />
                        <Content
                            actions={getMatrixElementButtonArray(
                                frontpageContent,
                                "element1"
                            )}
                        >
                            <Header
                                size={3}
                                title={getText(
                                    frontpageContent.frontpageMatrix[
                                        getMatrixElement("element1").header
                                        ],
                                    "Teknologihusets partnere"
                                )}
                            />
                            <p>
                                {
                                    frontpageContent.frontpageMatrix[
                                        getMatrixElement("element1").textLabel
                                        ]
                                }
                            </p>
                        </Content>
                    </Spotlight>

                    <Spotlight
                        imgAlign={
                            !frontpageContent.frontpageMatrix[
                                getMatrixElement("element2").imagePosition
                                ]
                                ? "left"
                                : "right"
                        }
                    >
                        <SpotlightImage
                            imgSrc={getImage(
                                frontpageContent.frontpageMatrix[
                                    getMatrixElement("element2").image
                                    ],
                                "/images/resepsjon.jpeg"
                            )}
                        />
                        <Content
                            actions={getMatrixElementButtonArray(
                                frontpageContent,
                                "element2"
                            )}
                        >
                            <Header
                                size={3}
                                title={getText(
                                    frontpageContent.frontpageMatrix[
                                        getMatrixElement("element2").header
                                        ],
                                    "Rebel-bygget"
                                )}
                            />
                            <p>
                                {
                                    frontpageContent.frontpageMatrix[
                                        getMatrixElement("element2").textLabel
                                        ]
                                }
                            </p>
                        </Content>
                    </Spotlight>

                    <Spotlight
                        imgAlign={
                            !frontpageContent.frontpageMatrix[
                                getMatrixElement("element3").imagePosition
                                ]
                                ? "left"
                                : "right"
                        }
                    >
                        <SpotlightImage
                            imgSrc={getImage(
                                frontpageContent.frontpageMatrix[
                                    getMatrixElement("element3").image
                                    ],
                                "/images/trapp.jpeg"
                            )}
                        />
                        <Content
                            actions={getMatrixElementButtonArray(
                                frontpageContent,
                                "element3"
                            )}
                        >
                            <Header
                                size={3}
                                title={getText(
                                    frontpageContent.frontpageMatrix[
                                        getMatrixElement("element3").header
                                        ],
                                    "Fasiliteter"
                                )}
                            />
                            <p>
                                {
                                    frontpageContent.frontpageMatrix[
                                        getMatrixElement("element3").textLabel
                                        ]
                                }
                            </p>
                        </Content>
                    </Spotlight>

                    <p>
                        {getText(
                            frontpageContent.frontpageMatrix
                                .frontpage_content_matrix_description_text,
                            "Lorem Ipsum"
                        )}
                    </p>

                    {getMatrixFooter(frontpageContent)}
                </div>
            </section>

            <Partners partnerContent={frontpageContent.frontpagePartners}/>

            <section id="community-info1" className="wrapper style1 special">
                <div className="inner">
                    <Header
                        title={getText(
                            frontpageContent.frontpageSpotlight.frontpage_spotlight_header,
                            "Communities"
                        )}
                    >
                    </Header>

                    <Spotlight
                        imgAlign={"right"}
                    >
                        <SpotlightImage
                            imgSrc={"/images/nickt_meetup.jpeg"}
                        />
                        <Content
                            actions={getMatrixElementButtonArray(
                                frontpageContent,
                                "element2"
                            )}
                        >
                            <Header
                                size={3}
                                title={getText(
                                    frontpageContent.frontpageSpotlight.frontpage_spotlight_text,
                                    "Lorem Ipsum"
                                )}
                            />
                        </Content>
                    </Spotlight>
                    {frontpageContent.frontpageSpotlight.frontpage_spotlight_btn_visibility &&
                        <footer>
                            <ul className="actions special">
                                <li>
                                    <a
                                        href={getText(
                                            frontpageContent.frontpageSpotlight
                                                .frontpage_spotlight_btn_url,
                                            "https://teknologihuset.no"
                                        )}
                                        className="button big"
                                    >
                                        {getText(
                                            frontpageContent.frontpageSpotlight
                                                .frontpage_spotlight_btn_label,
                                            "Les mer"
                                        )}
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    }
                </div>
            </section>

            <section id="footer" className="wrapper split style2">
                <div className="inner">
                    <section>
                        <header>
                            <h3>{getText(
                                frontpageContent.frontpageContact.frontpage_contact_header,
                                "Kontakt Teknologihuset"
                            )}</h3>
                        </header>
                        <p>
                            {getText(
                                frontpageContent.frontpageContact.frontpage_contact_text,
                                "Lorem Ipsum"
                            )}
                        </p>
                        <ul className="icons">
                            <li>
                                <a
                                    href={frontpageContent.frontpageContact.frontpage_contact_twitter_url}
                                    className="icon brands fa-twitter"
                                >
                                    <span className="label">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={frontpageContent.frontpageContact.frontpage_contact_instagram_url}
                                    className="icon brands fa-instagram"
                                >
                                    <span className="label">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={frontpageContent.frontpageContact.frontpage_contact_github_url}
                                    className="icon brands fa-github"
                                >
                                    <span className="label">GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section id="kontaktskjema">
                        <form id="th_kontaktskjema" method="post" action="https://formspree.io/f/xvoyrvwp">
                            <div className="fields">
                                <div className="field">
                                    <select
                                        required={true}
                                        name="category" id="category" style={{color: "#56565695"}}>
                                        <option value="">Velg en kategori</option>
                                        <option value="moterom">Reservere et møterom</option>
                                        <option value="motesal">Reservere en møtesal (meetups/events)</option>
                                        <option value="partner">Partner/Sponsoring</option>
                                        <option value="etisk_coc">Etiske retningslinjer</option>
                                    </select>
                                </div>
                                <div className="field half">
                                    <input
                                        type="text"
                                        name="name"
                                        required={true}
                                        id="name"
                                        placeholder="Navn"/>
                                </div>
                                <div className="field half">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required={true}
                                        placeholder="E-post"
                                    />
                                </div>
                                <div className="field">
                                  <textarea
                                      name="message"
                                      id="message"
                                      required={true}
                                      placeholder="Melding"
                                      rows={4}
                                  />
                                </div>
                                <div className="field">
                                    <div id="g-recaptcha" className="g-recaptcha"
                                         data-sitekey="6LceSiQqAAAAAEjmukfSyqKW9gBOSqJFPE2EQK0e"></div>
                                </div>
                            </div>
                            <ul className="actions">
                                <li>
                                    <input type="submit" value="Send melding"/>
                                </li>
                            </ul>
                        </form>
                        <script src="/assets/js/form.js"></script>
                    </section>
                </div>
                <Copyright/>
            </section>
        </div>
    );
}

interface ME {
    header: string;
    textLabel: string;
    image: string;
    imagePosition: string;
    bntLabel: string;
    bntLabelUrl: string;
    bntVisibility: string;
}

const getMatrixElement: (key: string) => ME = (key: string) => {
    return {
        header: `frontpage_content_matrix_${key}_header`,
        textLabel: `frontpage_content_matrix_${key}_text`,
        image: `frontpage_content_matrix_${key}_image`,
        imagePosition: `frontpage_content_matrix_${key}_image_position`,
        bntLabel: `frontpage_content_matrix_${key}_btn_label`,
        bntLabelUrl: `frontpage_content_matrix_${key}_btn_url`,
        bntVisibility: `frontpage_content_matrix_${key}_btn_visibility`,
    };
};

function getMatrixElementButtonArray(
    frontpageContent: any,
    elementName: string
): Action[] | undefined {
    const element = [
        {
            href: frontpageContent.frontpageMatrix[
                getMatrixElement(elementName).bntLabelUrl
                ],
            label:
                frontpageContent.frontpageMatrix[
                    getMatrixElement(elementName).bntLabel
                    ],
        },
    ];
    return frontpageContent.frontpageMatrix[
        getMatrixElement(elementName).bntVisibility
        ]
        ? element
        : undefined;
}

function getMatrixFooter(frontpageContent: any) {
    return frontpageContent.frontpageMatrix
        .frontpage_content_matrix_description_btn_visibility ? (
        <footer>
            <ul className="actions special">
                <li>
                    <a
                        href={getText(
                            frontpageContent.frontpageMatrix
                                .frontpage_content_matrix_description_btn_url,
                            "https://teknologihuset.no"
                        )}
                        className="button"
                    >
                        {getText(
                            frontpageContent.frontpageMatrix
                                .frontpage_content_matrix_description_btn_label,
                            "Les mer."
                        )}
                    </a>
                </li>
            </ul>
        </footer>
    ) : (
        ""
    );
}

export default FrontPage;
