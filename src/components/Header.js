import React from "react";
import '../styles/header.css'

function HeaderTags(props) {
    return (
        <>
            <h1 >{props.title}</h1>
            <h2>{props.name}
                <span>{props.year}</span>
            </h2>
        </>
    );
}

function Header(props) {
    const user = {
        name: 'Renz Sagge',
        year: '2023',
        title: 'Learning React'
    }
    return (
        <>
            <header className="page-header">
                <HeaderTags title={user.title} name={user.name} year={user.year} />
            </header>
        </>
    );
}

export default Header;