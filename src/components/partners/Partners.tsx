import {getImage, getText} from "../../lib/sanity";
import Header from "../header/Header";

export interface PartnersPageData {
    texts: {
        frontpage_partner_header: string
        frontpage_partner_subheader: string
    }

    partnerList: Array<PartnerInfo>
}

interface PartnerInfo {
    partner_name: string
    partner_web: string
    partner_logo_image: any
    partner_visibility: boolean
}

function createPartnerLogoGrid(partnerList: Array<PartnerInfo>) {
    return partnerList
        .filter(p => p.partner_visibility)
        .map(p => <div className="col-2" key={p.partner_name}>
            <span className="image fit">
                <img src={
                    getImage(
                        p.partner_logo_image,
                        "/images/duke-wip.png"
                    )
                } alt={p.partner_name} />
            </span>
        </div>);
}

function Partners({ partnerContent }: { partnerContent: PartnersPageData }) {
    return (
        <section id="partnerlist" className="wrapper style2 special">
            <div className="inner">
                <Header
                    title={getText(
                        partnerContent.texts.frontpage_partner_header,
                        "Teknologihusets partnere"
                    )}
                >
                    {getText(
                        partnerContent.texts.frontpage_partner_subheader,
                        "Bli kjent blir våre partnere"
                    )}
                </Header>
                <div className="box alt">
                    <div className="row gtr-uniform">
                        {
                            createPartnerLogoGrid(partnerContent.partnerList)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
