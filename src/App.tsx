import React, {useState} from 'react';
import './App.css';
import Card from './component/Card';
import data from './data.json';

let characterList = data.characters

function App(): JSX.Element {
  const [cardData, setCardData] = useState(characterList);

  // useEffect(() => {
  //   fetch("./data.json")
  //   .then(response => 
  //       response.json())
  //   .then(data => 
  //     setCardData(data))
  // }, []);


var mappedState = cardData.map(card =>
  <Card
    title={card.title}
    name={card.name}
    isStarred={card.isStarred}
    imageLink={card.imageLink}
    description={card.description}
    tags={card.tags}
  />
)

  return (
    <div className="App">
      <div className="card-display-area">
        {mappedState}
      </div>
    </div>
  );
}

export default App;
