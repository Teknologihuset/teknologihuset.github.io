import React from "react";
import Header, {HeaderProps} from "../header/Header";

type ContentProps = {
    header: string | HeaderProps
    body?: string | React.ReactNode
    actions?: Action[]
}

export type Action = {
    href: string
    label: string
    className?: string
}

const Content: React.FC<ContentProps> = (props) => {

    if (props.children) {
        return <div className="content"> {props.children} </div>
    }

    let header;
    if ((typeof props.header) === "string") {
        header = <Header text={props.header} />
    } else {
        const headerProps: HeaderProps = props.header as HeaderProps;
        header = <Header {...headerProps} />
    }

    let body;
    if (props.body && typeof props.body === "string") {
        body = <p>{props.body}</p>
    }

    const footer = makeFooter(props.actions);

    return <div className="content">
        { header }
        { body }
        { footer }
    </div>
}

function makeFooter(actions: Action[] | undefined): JSX.Element | null {
    if (actions && actions.length > 0) {
        const actionList = actions.map((action, i) =>
            <li key={action.href + i}>
                <a href={action.href} className={action.className ?? "button"}>{action.label}</a>
            </li>)
        return <footer>
            <ul className="actions">
                {actionList}
            </ul>
        </footer>;
    }

    return null;
}

export default Content;