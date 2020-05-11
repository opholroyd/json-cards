import React, {useState} /* ,{useState, useEffect} */ from 'react'
import './card.css';

interface ICardProps {
    title: string,
    name: string,
    isStarred: boolean,
    imageLink: string,
    alias?: string[],
    description: string,
    tags: string,
    abilities?: string[],
    neutrality?: string
}
    
// export const dataFetch = async () => {
//     const RequestURL: string = ``;
//     const info: object = {
//     "method": "GET",
//     "headers": {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json"
//         }
//     };

//     const data = await fetch(RequestURL, info)
//     const body = await data.json()

//     console.log(body);
//     return body
// } 

// useEffect(() => {
//     dataFetch()
// }, []);

{/* <button onClick={dataFetch}>Click ME!</button> */}

const openModal = () => true;

const Card: React.FC<ICardProps> = (props) => {
    const [goodRating, setGoodRating] = useState(0);
    const [badRating, setBadRating] = useState(0);

    const increaseRating = () => setGoodRating(goodRating + 1)
    const decreaseRating = () => setBadRating(badRating + 1)

    return (
        <div className="card-container">
            <div className="card-top-container">
                <h3>{props.title} {props.name}</h3>
                <p>User Ratings: {goodRating}</p>
                <img
                    // onClick={openModal} 
                    className="image" 
                    src={props.imageLink}
                    alt="hero"
                />
            </div>
            <div className="card-bottom-container">
                <div className="description-container">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="rating-container">
                <button onClick={increaseRating}> ↑ {goodRating}</button>
                <h4>101</h4>
                <button onClick={decreaseRating}> ↓ {badRating}</button>
            </div>
        </div>
    )    
}

export default Card
