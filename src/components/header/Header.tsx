import React from "react";

export interface HeaderProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    title?: string | React.ReactNode;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ size = 2, title = "", children }: HeaderProps) => makeHeader({ size, title, children });

Header.displayName = 'HeaderProps'

function makeHeader(props: HeaderProps): JSX.Element {
    return (
        <header>
            {getHeader(props)}
            {
                !!props.children && props.children
            }
        </header>
    );
}

function getHeader(props: HeaderProps) {
    switch (props.size) {
        case 1: return <h1>{props.title}</h1>
        case 2: return <h2>{props.title}</h2>
        case 3: return <h3>{props.title}</h3>
        case 4: return <h4>{props.title}</h4>
        case 5: return <h5>{props.title}</h5>
        case 6: return <h6>{props.title}</h6>
        default: throw Error("Invalid header size");
    }
}

export default Header;