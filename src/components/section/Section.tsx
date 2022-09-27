import classNames from "classnames";

type SectionProps = {
    children: React.ReactNode;
    special: boolean;
    style: "white-background" | "gray-background" | "parallax";
    type?: string
}

const defaultProps: SectionProps = {
    children: [],
    special: false,
    style: "white-background"
}

function Section(props: SectionProps): JSX.Element {
    return <section className={classNames(style(props.style), special(props.special))}>

    </section>
}

function special(value: boolean): string {
    return value ? "special" : "";
}

function style(styleType: string): string {
    if (styleType === "white-background") return "style1"
    if (styleType === "gray-background") return "style2"
    if (styleType === "parallax") return "style3"

    throw new Error("Unknown section style");
}

Section.defaultProps = defaultProps;

export default Section;