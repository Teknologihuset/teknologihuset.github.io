import "./FrontPage.module.css";
import Banner from "../banner/Banner";
import Header from "../header/Header";
import Spotlight from "../spotlight/Spotlight";
import Content from "../content/Content";
import SpotlightImage from "../image/SpotlightImage";
import { getImage, getText } from "../../core/client/client";
import Loader from "../loader/Loader";
import { Action } from "../content/ActionList";
import { Props } from "../../pages";

function FrontPage({ pageContent: frontpageContent, bannerContent }: Props) {
  if (!frontpageContent) {
    return (
      <div id="wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div id="wrapper">
      <Banner bannerContent={bannerContent} />

      <section className="wrapper style2 special">
        <div className="inner">
          <Header
            title={frontpageContent.frontpageTop.frontpage_booking_header}
          >
            {frontpageContent.frontpage_booking_subheader}
          </Header>

          <Spotlight>
            <SpotlightImage
              imgSrc={getImage(
                frontpageContent.frontpageTop
                  .frontpage_booking_description_logo,
                "/images/auditorium.jpeg"
              )}
            />
            <Content
              actions={[
                {
                  href: "#",
                  label:
                    frontpageContent.frontpageTop.frontpage_booking_btn_label,
                },
              ]}
            >
              <Header
                size={3}
                title={
                  frontpageContent.frontpageTop
                    .frontpage_booking_description_header
                }
              />
              <p>
                {
                  frontpageContent.frontpageTop
                    .frontpage_booking_description_text
                }
              </p>
            </Content>
          </Spotlight>

          <p>{frontpageContent.frontpageTop.frontpage_booking_description2}</p>

          <footer>
            <ul className="actions special">
              <li>
                <a
                  href="src/components/frontpage/FrontPage#"
                  className="button"
                >
                  {frontpageContent.frontpageTop.frontpage_booking_btn2_label}
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>

      <section className="wrapper style1 special">
        <div className="inner">
          <Header
            size={2}
            title={getText(
              frontpageContent.frontpageMatrix.frontpage_content_matrix_header,
              "Rebel // Teknologihuset"
            )}
          >
            {getText(
              frontpageContent.frontpageMatrix
                .frontpage_content_matrix_subheader,
              "Bli kjent med Teknologihuset på Rebel"
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

      <section className="wrapper style3 special">
        <div className="inner">
          <Header
            title={getText(
              frontpageContent.frontpageSpotlight.frontpage_spotlight_header,
              "Communities"
            )}
          >
            {getText(
              frontpageContent.frontpageSpotlight.frontpage_spotlight_text,
              "Lorem Ipsum"
            )}
          </Header>
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
        </div>
      </section>

      <section id="footer" className="wrapper split style2">
        <div className="inner">
          <section>
            <header>
              <h3>Kontakt Teknologihuset</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos magna fames ac
              turpis egestas amet non lorem amet.
            </p>
            <ul className="icons">
              <li>
                <a
                  href="src/components/frontpage/FrontPage#"
                  className="icon brands fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="src/components/frontpage/FrontPage#"
                  className="icon brands fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="src/components/frontpage/FrontPage#"
                  className="icon brands fa-snapchat-ghost"
                >
                  <span className="label">Snapchat</span>
                </a>
              </li>
              <li>
                <a
                  href="src/components/frontpage/FrontPage#"
                  className="icon brands fa-github"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
          <section>
            <form method="post" action="src/components/frontpage/FrontPage#">
              <div className="fields">
                <div className="field half">
                  <input type="text" name="name" id="name" placeholder="Navn" />
                </div>
                <div className="field half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-post"
                  />
                </div>
                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Melding"
                    rows={4}
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send melding" />
                </li>
              </ul>
            </form>
          </section>
        </div>
        <div className="copyright">
          <p>&copy; Teknologihuset 2022. All rights reserved.</p>
        </div>
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
