import React from 'react'
import '../styles/avatarCard.css'

function AvatarContent(props) {
    const { id, name, alias, someInfo } = props.character
    return (
        <>
            <header className='card-header'>
                <div className='card-header-wrapper'>
                    <span className='rank-fav'>
                        <span className='rank-wrapper'>
                            <span className='ranking'>{id}</span>
                        </span>
                    </span>
                    <h1 className='char-name'>{name}<span className='alias-wrapper'><span className='char-alias'>{alias}</span>
                    </span></h1>
                </div>
            </header>
            <div className="some-info">
                <ul className="info-holder">
                    {someInfo.map((info, index) => (
                        <li className="info" key={index}>
                            {info}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


function AvatarCard() {
    const avatars = [{
        id: '01',
        name: 'Roronoa Zoro',
        alias: 'Pirate Hunter',
        someInfo: ["He's the first mate and swordsman of the Straw Hat Pirates.",
            "Zoro is known for his strength, speed, and swordsmanship skills.",
            "His dream is to become the world's greatest swordsman."],
        class: ['avatar', 'avatar-card', 'zoro']
    }, {
        id: '02',
        name: 'Tony Tony Chopper',
        alias: 'Cotton Candy Lover',
        someInfo: ["He's a reindeer who gained human abilities by eating the Human-Human Fruit.",
            "Chopper is the doctor of the Straw Hat Pirates and is skilled in combat.",
            "He has a kind-hearted and innocent personality."],
        class: ['avatar', 'avatar-card', 'chopper']
    }, {
        id: '03',
        name: 'Monkey D. Luffy',
        alias: 'Straw Hat Luffy',
        someInfo: ["Luffy has the ability to stretch his body like rubber, gained from eating the Gum-Gum Fruit.",
            "He's the captain of the Straw Hat Pirates.",
            "Luffy has a strong sense of justice and a carefree, optimistic personality."],
        class: ['avatar', 'avatar-card', 'luffy']
    },
    {
        id: '01',
        name: 'Roronoa Zoro',
        alias: 'Pirate Hunter',
        someInfo: ["He's the first mate and swordsman of the Straw Hat Pirates.",
            "Zoro is known for his strength, speed, and swordsmanship skills.",
            "His dream is to become the world's greatest swordsman."],
        class: ['avatar', 'avatar-card', 'zoro']
    }, {
        id: '02',
        name: 'Tony Tony Chopper',
        alias: 'Cotton Candy Lover',
        someInfo: ["He's a reindeer who gained human abilities by eating the Human-Human Fruit.",
            "Chopper is the doctor of the Straw Hat Pirates and is skilled in combat.",
            "He has a kind-hearted and innocent personality."],
        class: ['avatar', 'avatar-card', 'chopper']
    }, {
        id: '03',
        name: 'Monkey D. Luffy',
        alias: 'Straw Hat Luffy',
        someInfo: ["Luffy has the ability to stretch his body like rubber, gained from eating the Gum-Gum Fruit.",
            "He's the captain of the Straw Hat Pirates.",
            "Luffy has a strong sense of justice and a carefree, optimistic personality."],
        class: ['avatar', 'avatar-card', 'luffy']
    },
    {
        id: '01',
        name: 'Roronoa Zoro',
        alias: 'Pirate Hunter',
        someInfo: ["He's the first mate and swordsman of the Straw Hat Pirates.",
            "Zoro is known for his strength, speed, and swordsmanship skills.",
            "His dream is to become the world's greatest swordsman."],
        class: ['avatar', 'avatar-card', 'zoro']
    }, {
        id: '02',
        name: 'Tony Tony Chopper',
        alias: 'Cotton Candy Lover',
        someInfo: ["He's a reindeer who gained human abilities by eating the Human-Human Fruit.",
            "Chopper is the doctor of the Straw Hat Pirates and is skilled in combat.",
            "He has a kind-hearted and innocent personality."],
        class: ['avatar', 'avatar-card', 'chopper']
    }, {
        id: '03',
        name: 'Monkey D. Luffy',
        alias: 'Straw Hat Luffy',
        someInfo: ["Luffy has the ability to stretch his body like rubber, gained from eating the Gum-Gum Fruit.",
            "He's the captain of the Straw Hat Pirates.",
            "Luffy has a strong sense of justice and a carefree, optimistic personality."],
        class: ['avatar', 'avatar-card', 'luffy']
    },
    {
        id: '01',
        name: 'Roronoa Zoro',
        alias: 'Pirate Hunter',
        someInfo: ["He's the first mate and swordsman of the Straw Hat Pirates.",
            "Zoro is known for his strength, speed, and swordsmanship skills.",
            "His dream is to become the world's greatest swordsman."],
        class: ['avatar', 'avatar-card', 'zoro']
    }
    ]

    return (
        <>
            {avatars.map((character, index) => (
                <div className={character.class.join(' ')} key={index}>
                    <span className='blur'></span>
                    <AvatarContent key={index} character={character} />
                </div>
            ))}
        </>
    );
}

export default AvatarCard;