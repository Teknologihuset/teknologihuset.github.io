import './FrontPage.css'
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Spotlight from "../../components/spotlight/Spotlight";
import Content from "../../components/content/Content";
import SpotlightImage from "../../components/image/SpotlightImage";
import th from "../../core/client/client";
import {useQuery} from "react-query";
import Loader from "../../components/loader/Loader";

function FrontPage() {

  const query = `
      *[ _type == 'texts_frontpage_content' ] { 
        frontpage_booking_header, 
        frontpage_booking_subheader,
        frontpage_booking_description_header, 
        frontpage_booking_description_text, 
        frontpage_booking_btn_label,
        frontpage_booking_btn_url,
        frontpage_booking_btn_label_visibility,
        frontpage_booking_description2,
        frontpage_booking_btn2_label,
        frontpage_booking_btn2_label_visibility
      }
    `;

  const { data: frontageContent } = useQuery('frontageContentList',
      () => th.sanity()
          .fetch(query)
          .then(value => value.pop())
          .catch(reason => console.error(reason)));

  if (!frontageContent) {
    return <Loader />
  }

  return (
      <div id="wrapper">
        <Banner />

        <section className="wrapper style2 special">
          <div className="inner">
            <Header title={frontageContent.frontpage_booking_header}>
              {frontageContent.frontpage_booking_subheader}
            </Header>

            <Spotlight>
              <SpotlightImage imgSrc="/images/auditorium.jpeg" />
              <Content actions={ [ {href: "#", label: frontageContent.frontpage_booking_btn_label} ] }>
                <Header size={3} title={frontageContent.frontpage_booking_description_header} />
                <p>{frontageContent.frontpage_booking_description_text}</p>
              </Content>
            </Spotlight>

            <p>{frontageContent.frontpage_booking_description2}</p>

            <footer>
              <ul className="actions special">
                <li><a href="#" className="button">{frontageContent.frontpage_booking_btn2_label}</a></li>
              </ul>
            </footer>
          </div>
        </section>

        <section className="wrapper style1 special">
          <div className="inner">
            <Header size={2} title="Rebel // Teknologihuset">Bli kjent med Teknologihuset på Rebel</Header>

            <Spotlight>
              <SpotlightImage imgSrc="/images/partnere.jpeg" />
              <Content actions={ [ {href: "#", label: "Details"} ] }>
                <Header size={3} title={"Teknologihusets partnere"} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                  egestas amet non lorem amet.</p>
              </Content>
            </Spotlight>

            <Spotlight imgAlign="left">
              <SpotlightImage imgSrc="/images/resepsjon.jpeg" />
              <Content actions={ [ {href: "#", label: "Details"} ] }>
                <Header size={3} title={"Rebel-bygget"} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                  egestas amet non lorem amet.</p>
              </Content>
            </Spotlight>

            <Spotlight>
              <SpotlightImage imgSrc="/images/trapp.jpeg" />
              <Content actions={ [ {href: "#", label: "Details"} ] }>
                <Header size={3} title={"Fasiliteter"} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                  egestas amet non lorem amet.</p>
              </Content>
            </Spotlight>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos malesuada fames ac turpis
              egestas. In non lorem amet. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Etiam tristique eu nibh.</p>

            <footer>
              <ul className="actions special">
                <li><a href="#" className="button">Les mer</a></li>
              </ul>
            </footer>
          </div>
        </section>

        <section className="wrapper style3 special">
          <div className="inner">
            <Header title={"Communities"}>
              Aptent taciti sociosqu litora torquent et conubia sed etiam.<br/>
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam<br/>
              turpis mauris, ultricies erat malesuada quis.
            </Header>
            <footer>
              <ul className="actions special">
                <li><a href="#" className="button big">Les mer</a></li>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                egestas amet non lorem amet.</p>
              <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a>
                </li>
                <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </section>
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half"><input type="text" name="name" id="name" placeholder="Navn"/></div>
                  <div className="field half"><input type="email" name="email" id="email" placeholder="E-post"/></div>
                  <div className="field">
                    <textarea name="message" id="message" placeholder="Melding" rows={4} />
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send melding"/></li>
                </ul>
              </form>
            </section>
          </div>
          <div className="copyright">
            <p>&copy; Teknologihuset 2022. All rights reserved.</p>
          </div>
        </section>
      </div>
  )
}

export default FrontPage
