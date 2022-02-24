import { useState } from 'react'
import './App.css'

function App() {

  return (
      <div id="wrapper">
        <section id="intro" className="wrapper featured style4">
          <div className="inner">
            <span className="image"><img src="/images/logo.png" alt=""/></span>
            <div className="content">
              <header>
                <h1>Teknologihuset Rebel</h1>
                <p>Huset med IT-folk i sentrum.</p>
              </header>
              <footer>
                <ul className="actions">
                  <li><a href="#" className="button big">Les mer</a></li>
                </ul>
              </footer>
            </div>
          </div>
        </section>

        <section className="wrapper style2 special">
          <div className="inner">
            <header>
              <h2>Teknologihuset Rebel - House of Communities</h2>
              <p>Toppmoderne møteplass for communitymiljøet på kveldstid. Muliggjort av Norges ledende IT-bedrifter.

                Bookingløsningen er under arbeid. For booking av rom, kontakt oss på:
                vert@teknologihuset.no.</p>
            </header>
            <ul className="icons major style2">
              <li><span className="icon solid fa-code"><span className="label">Lorem</span></span></li>
              <li>
                <span className="icon solid fa-cog"><span className="label">Ipsum</span></span></li>
              <li>
                <span className="icon solid fa-gem"><span className="label">Dolor</span></span></li>
              <li>
                <span className="icon solid fa-camera-retro"><span className="label">Feugiat</span></span></li>
              <li>
                <span className="icon solid fa-briefcase"><span className="label">Tempus</span></span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos malesuada fames ac turpis
              egestas. In non lorem amet. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Etiam tristique eu nibh.</p>
            <footer>
              <ul className="actions special">
                <li><a href="#" className="button">Details</a></li>
              </ul>
            </footer>
          </div>
        </section>

        <section className="wrapper style1 special">
          <div className="inner">
            <header>
              <h2>Duis torquent</h2>
              <p>Rutrum facilisis. Class aptent taciti sociosqu<br/>
                litora torquent et conubia etiam nostra.</p>
            </header>
            <section className="spotlight">
              <span className="image"><img src="/images/pic02.jpg" alt=""/></span>
              <div className="content">
                <header>
                  <h3>Aliquam veroeros</h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                  egestas amet non lorem amet.</p>
                <footer>
                  <ul className="actions">
                    <li><a href="#" className="button">Details</a></li>
                  </ul>
                </footer>
              </div>
            </section>
            <section className="spotlight">
              <span className="image"><img src="/images/pic03.jpg" alt=""/></span>
              <div className="content">
                <header>
                  <h3>Nostra adpiscing</h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                  egestas amet non lorem amet.</p>
                <footer>
                  <ul className="actions">
                    <li><a href="#" className="button">Details</a></li>
                  </ul>
                </footer>
              </div>
            </section>
            <section className="spotlight">
              <span className="image"><img src="/images/pic04.jpg" alt=""/></span>
              <div className="content">
                <header>
                  <h3>Tempus litoria</h3>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis
                  egestas amet non lorem amet.</p>
                <footer>
                  <ul className="actions">
                    <li><a href="#" className="button">Details</a></li>
                  </ul>
                </footer>
              </div>
            </section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos malesuada fames ac turpis
              egestas. In non lorem amet. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Etiam tristique eu nibh.</p>
            <footer>
              <ul className="actions special">
                <li><a href="#" className="button">Details</a></li>
              </ul>
            </footer>
          </div>
        </section>

        <section className="wrapper style3 special">
          <div className="inner">
            <header>
              <h2>Amet ullamcorper</h2>
              <p>Aptent taciti sociosqu litora torquent et conubia sed etiam.<br/>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam<br/>
                turpis mauris, ultricies erat malesuada quis.</p>
            </header>
            <footer>
              <ul className="actions special">
                <li><a href="#" className="button big">Get Started</a></li>
              </ul>
            </footer>
          </div>
        </section>

        <section id="footer" className="wrapper split style2">
          <div className="inner">
            <section>
              <header>
                <h3>Magna lorem ipsum</h3>
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
                  <div className="field half"><input type="text" name="name" id="name" placeholder="Name"/></div>
                  <div className="field half"><input type="email" name="email" id="email" placeholder="Email"/></div>
                  <div className="field">
                    <textarea name="message" id="message" placeholder="Message" rows={4} />
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message"/></li>
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

export default App
