import "./Element.css"
import React from 'react';

function part({name, image, hp, attack, defense, types, species, id, speed , spattack , spaddeffens , weight, base_experience, game_index , move, height}) {
    const style = types + " front";
    const col = types + " back"
    return (
        <>
        <div class="maincontainer">
            <div class={col}>
                <h2>#{id}</h2>
                <p>species: {species} 
                <br/> hp: {hp} 
                <br/> attack: {attack} 
                <br/> defense: {defense} 
                <br/> type: {types} 
                <br /> Speed: {speed}
                <br /> special-attack:  {spattack}
                <br /> special-defense: {spaddeffens}
                <br /> weight: {weight}
                <br /> height: {height}
                <br /> base_experience: {base_experience}
                <br /> game_index: {game_index}
                <br /> move: {move}
                </p>
            </div>
            <div class={style}>
                <div class="image">
                    <img src={image}/>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
            </>

    );
}

export default part;
