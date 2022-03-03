import React from "react";

export interface HeaderProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6
    text?: string | React.ReactNode
    body?: string | React.ReactNode
    children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = (props) => makeHeader(props)

Header.displayName = 'HeaderProps'
Header.defaultProps = { size: 2, text: "", body: "" }

function makeHeader(props: HeaderProps): JSX.Element {
    if (props.children) {
        return <>{props.children}</>
    }

    return <header>
        {getHeader(props)}
        {getParagraph(props)}
    </header>
}

function getHeader(props: HeaderProps) {
    switch (props.size) {
        case 1: return <h1>{props.text}</h1>
        case 2: return <h2>{props.text}</h2>
        case 3: return <h3>{props.text}</h3>
        case 4: return <h4>{props.text}</h4>
        case 5: return <h5>{props.text}</h5>
        case 6: return <h6>{props.text}</h6>
        default: throw Error("Invalid header size");
    }
}

function getParagraph(props: HeaderProps) {
    return <p>{props.body}</p>
}

export default Header;