import React from "react";

type ActionListProps = {
    actions: Action[]
}

export type Action = {
    href: string
    label: string
    className?: string
}

const ActionList: React.FC<ActionListProps> = (props) => {
    return (
        <ul className="actions">
            {
                props.actions.map((action, i) =>
                    <li key={action.href + i}>
                        <a href={action.href} className={action.className ?? "button"}>{action.label}</a>
                    </li>)
            }
        </ul>
    );
}

export default ActionList;