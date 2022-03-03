import classNames from "classnames";

type SpotlightProps = {
    children: React.ReactNode;
    imgAlign?: "left" | "right";
}

const defaultProps: SpotlightProps = {
    children: [],
    imgAlign: "right"
}

function Spotlight(props: SpotlightProps): JSX.Element {
    const imgAlignment = props.imgAlign === "left" ? "txt-align-right" : "";

    return (
        <section className={classNames("spotlight", imgAlignment)}>
            {props.children}
        </section>
    );
}

Spotlight.defaultProps = defaultProps;

export default Spotlight;