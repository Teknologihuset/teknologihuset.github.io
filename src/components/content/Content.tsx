import React from "react";
import ActionList, {Action} from "./ActionList";

type ContentProps = {
    children: React.ReactNode;
    actions?: Action[]
}

const Content: React.FC<ContentProps> = (props) => {
    return <div className="content">
        { props.children }
        <footer>
            <ActionList actions={props.actions ?? []} />
        </footer>
    </div>
}

export default Content;