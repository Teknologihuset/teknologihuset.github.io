import { getImage } from "../../lib/sanity";

function Banner({ bannerContent }: { bannerContent: any }) {
  return (
    <section id="intro" className="wrapper featured style4">
      <div className="inner">
        <span className="image">
          <img
            src={getImage(bannerContent.frontpage_header_logo)}
            alt="Teknologihuset logo"
          />
        </span>
        <div className="content">
          <header>
            <h1>{bannerContent.frontpage_header}</h1>
            <p>{bannerContent.frontpage_subheader}</p>
          </header>
          <footer>
            <ul className="actions">
              <li>
                <a href="#info-teknologihuset" className="button big">
                  {bannerContent.frontpage_action_btn_label}
                </a>
              </li>
              <li>
                <a href="#kontaktskjema" className="button big">
                  Kontakt
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Banner;
