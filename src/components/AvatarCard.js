import React from 'react'
import '../styles/avatarCard.css'
import ReactIcons from './ReactIcon'

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
    const avatars = [
        {
            id: '01',

            name: 'Monkey D. Luffy',
            alias: 'Straw Hat Luffy',
            someInfo: [
                "Luffy has the ability to stretch his body like rubber, gained from eating the Gum-Gum Fruit.",
                "He's the captain of the Straw Hat Pirates.",
                "Luffy has a strong sense of justice and a carefree, optimistic personality."
            ],
            class: ['avatar', 'avatar-card', 'luffy']
        },
        {
            id: '02',
            name: 'Roronoa Zoro',
            alias: 'Pirate Hunter',
            someInfo: [
                "He's the first mate and swordsman of the Straw Hat Pirates.",
                "Zoro is known for his strength, speed, and swordsmanship skills.",
                "His dream is to become the world's greatest swordsman."
            ],
            class: ['avatar', 'avatar-card', 'zoro'],
        },
        {
            id: '03',
            name: 'Usopp',
            alias: 'God Usopp',
            someInfo: [
                "Usopp is the marksman of the Straw Hat Pirates.",
                "He has a talent for creating and using various gadgets and inventions.",
                "Usopp can also use his creativity and resourcefulness in combat."
            ],
            class: ['avatar', 'avatar-card', 'usopp']
        },
        {
            id: '04',
            name: 'Nami',
            alias: 'Cat Burglar',
            someInfo: [
                "Nami is the navigator of the Straw Hat Pirates.",
                "She has a talent for drawing maps and can predict the weather.",
                "Nami is also skilled in combat and can hold her own in a fight."
            ],
            class: ['avatar', 'avatar-card', 'nami']
        },
        {
            id: '05',
            name: 'Sanji',
            alias: 'Black Leg Sanji',
            someInfo: [
                "Sanji is the chef of the Straw Hat Pirates.",
                "He is also skilled in combat, using his powerful kicks in battle.",
                "Sanji has a chivalrous personality and is known for his love of women."
            ],
            class: ['avatar', 'avatar-card', 'sanji']
        },
        {
            id: '06',
            name: 'Tony Tony Chopper',
            alias: 'Cotton Candy Lover',
            someInfo: [
                "He's a reindeer who gained human abilities by eating the Human-Human Fruit.",
                "Chopper is the doctor of the Straw Hat Pirates and is skilled in combat.",
                "He has a kind-hearted and innocent personality."
            ],
            class: ['avatar', 'avatar-card', 'chopper']
        },
        {
            id: '07',
            name: 'Cutty Flam',
            alias: 'Franky',
            someInfo: [
                "Franky is a cyborg and shipwright of the Straw Hat Pirates.",
                "He built the Thousand Sunny, the Straw Hat Pirates' second ship.",
                "Franky is known for his catchphrase 'Super!'.",
                "He is originally from Water 7 and was the leader of the Franky Family.",
                "Franky is powered by cola, which he uses as a fuel source."
            ],
            class: ['avatar', 'avatar-card', 'franky']
        },
        {
            id: '08',
            name: 'Nico Robin',
            alias: 'Devil Child',
            someInfo: ["Robin is an archaeologist and scholar of history", "A former member of the criminal organization Baroque Works.", "She possesses the power of the Hana Hana no Mi, which allows her to sprout multiple body parts from any surface.", "Robin's dream is to uncover the true history of the world."],
            class: ['avatar', 'avatar-card', 'robin']
        },
        {
            id: '08',
            name: 'Brook',
            alias: 'Soul King',
            someInfo: ["He's the musician of the Straw Hat Pirates.",
                "Brook has the ability to come back to life after dying due to eating the Yomi Yomi no Mi.",
                "His dream is to fulfill a promise he made to his old crew to reunite with them once more."],
            class: ['avatar', 'avatar-card', 'brook']
        },
        {
            id: '09',
            name: 'Jinbe',
            alias: 'Knight of the Sea',
            someInfo: ["Jinbe is a fishman and former captain of the Sun Pirates.",
                "He has great strength and is a skilled martial artist.",
                "Jinbe is known for his loyalty and wisdom."],
            class: ['avatar', 'avatar-card', 'jinbe']
        }

    ]

    return (
        <>
            {avatars.map((character, index) => (
                <div className={character.class.join(' ')} key={index}>
                    <span className='blur'></span>
                    <AvatarContent key={index} character={character} />
                    <ReactIcons />
                </div>
            ))}
        </>
    );
}

export default AvatarCard;