import th, {getImage} from "../../core/client/client";
import {useQuery} from "react-query";
import Loader from "../loader/Loader";

function Banner() {

    const query = `
      *[ _type == 'texts_frontpage_banner' ] { frontpage_header, frontpage_subheader, frontpage_action_btn_label, frontpage_header_logo }
    `;

    const { data: bannerContent } = useQuery('bannerContentList',
        () => th.sanity()
            .fetch(query)
            .then(value => value.pop())
            .catch(reason => console.error(reason)));

    if (!bannerContent) {
        return <Loader />;
    }

    return (
        <section id="intro" className="wrapper featured style4">
            <div className="inner">
                <span className="image"><img src={getImage(bannerContent.frontpage_header_logo)} alt="Teknologihuset logo"/></span>
                <div className="content">
                    <header>
                        <h1>{bannerContent.frontpage_header}</h1>
                        <p>{bannerContent.frontpage_subheader}</p>
                    </header>
                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button big">{bannerContent.frontpage_action_btn_label}</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </section>
    );
}

export default Banner;