import classNames from "classnames";
import React, {ReactElement} from "react";

type SpotlightProps = {
    children: React.ReactNode;
    imgAlign?: "left" | "right";
}

function Spotlight({ children, imgAlign = "right" }: SpotlightProps): ReactElement {
    const imgAlignment = imgAlign === "left" ? "txt-align-right" : "";

    return (
        <section className={classNames("spotlight", imgAlignment)}>
            {children}
        </section>
    );
}

export default Spotlight;