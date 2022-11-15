import React from "react";

type ActionListProps = {
    actions: Action[]
}

export type Action = {
    href: string
    label: string
    className?: string
    visible?: boolean
}

const ActionList: React.FC<ActionListProps> = (props) => {
    return (
        <ul className="actions">
            {
                props.actions.filter(({visible}) => visible).map(({className, href, label}, i) =>
                    <li key={href + i}>
                        <a href={href} className={className ?? "button"}>{label}</a>
                    </li>)
            }
        </ul>
    );
}

export default ActionList;