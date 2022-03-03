import { useState } from 'react'
import './FrontPage.css'
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Spotlight from "../../components/spotlight/Spotlight";
import Content from "../../components/content/Content";
import SpotlightImage from "../../components/image/SpotlightImage";

function FrontPage() {
  return (
      <div id="wrapper">
        <Banner />

        <section className="wrapper style2 special">
          <div className="inner">
            <Header
                text="Teknologihuset Rebel - House of Communities"
                body={`
                  Toppmoderne møteplass for communitymiljøet på kveldstid. Muliggjort av Norges ledende IT-bedrifter.

                  Bookingløsningen er under arbeid. For booking av rom, kontakt oss på:
                  vert@teknologihuset.no.
                `}
            />

            <Spotlight>
              <SpotlightImage imgSrc="/images/auditorium.jpeg" />
              <Content header={{size:3, text: "Teknologihusets partnere"}}
                       body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                                egestas amet non lorem amet."
                       actions={
                         [ {href: "#", label: "Details"} ]
                       }
              />
            </Spotlight>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos malesuada fames ac turpis
              egestas. In non lorem amet. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Etiam tristique eu nibh.
            </p>
            <footer>
              <ul className="actions special">
                <li><a href="#" className="button">Details</a></li>
              </ul>
            </footer>
          </div>
        </section>

        <section className="wrapper style1 special">
          <div className="inner">
            <Header size={2} text="Rebel // Teknologihuset" body="Bli kjent med Teknologihuset på Rebel"/>

            <Spotlight>
              <SpotlightImage imgSrc="/images/partnere.jpeg" />
              <Content header={{size:3, text: "Teknologihusets partnere"}}
                       body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                                egestas amet non lorem amet."
                       actions={
                         [ {href: "#", label: "Details"} ]
                       }
              />
            </Spotlight>

            <Spotlight imgAlign="left">
              <SpotlightImage imgSrc="/images/resepsjon.jpeg" />
              <Content header={{size:3, text: "Rebel-bygget"}}
                       body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                                egestas amet non lorem amet."
                       actions={
                         [ {href: "#", label: "Details"} ]
                       }
              />
            </Spotlight>

            <Spotlight>
              <SpotlightImage imgSrc="/images/trapp.jpeg" />
              <Content header={{size:3, text: "Fasiliteter"}}
                       body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                                egestas amet non lorem amet."
                       actions={
                         [ {href: "#", label: "Details"} ]
                       }
              />
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
            <header>
              <h2>Communities</h2>
              <p>Aptent taciti sociosqu litora torquent et conubia sed etiam.<br/>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam<br/>
                turpis mauris, ultricies erat malesuada quis.</p>
            </header>
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
