import {getImage, getText} from "../../lib/sanity";
import Header from "../header/Header";

function Partners({ partnerContent }: { partnerContent: any }) {
    return (
        <section id="partnerlist" className="wrapper style2 special">
            <div className="inner">
                <Header
                    title={getText(
                        partnerContent.frontpage_spotlight_header,
                        "Partnere"
                    )}
                >
                    {getText(
                        partnerContent.frontpageSpotlight.frontpage_spotlight_text,
                        "Lorem Ipsum"
                    )}
                </Header>
                {partnerContent.frontpageSpotlight.frontpage_spotlight_btn_visibility &&
                    <footer>
                        <ul className="actions special">
                            <li>
                                <a
                                    href={getText(
                                        partnerContent.frontpageSpotlight
                                            .frontpage_spotlight_btn_url,
                                        "https://teknologihuset.no"
                                    )}
                                    className="button big"
                                >
                                    {getText(
                                        partnerContent.frontpageSpotlight
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
    );
}

export default Partners;
