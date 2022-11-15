import React from "react";
import ActionList, {Action} from "./ActionList";

type ContentProps = {
    children: React.ReactNode;
    actions?: Action[]
}

const Content: React.FC<ContentProps> = (props) => {
    return <div className="content">
        {props.children}
        {
            !!props.actions && <ActionList actions={props.actions}/>
        }
    </div>
}

export default Content;