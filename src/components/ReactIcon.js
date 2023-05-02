import React from "react";
import '../styles/reacticon.css'

function HeartBtn() {

    return (
        <>
            <i class="fa-solid fa-heart heart" ></i>
        </>
    )
}

function LikeBtn() {
    return (
        <>
            <i class="fa-solid fa-thumbs-up like"></i>
        </>
    )
}

function ReactIcons() {
    return (
        <div className="react-icon-wrapper">
            <HeartBtn />
            <LikeBtn />
        </div>
    )

}

export default ReactIcons;
