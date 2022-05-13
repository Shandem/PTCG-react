import React, {useState} from 'react';
import './Gamebord.css'
import { Link } from 'react-router-dom';
import Card from './Card';
import deck  from './deck'

const Gamebord = () => {
    console.log(deck)
    const [redsDeck, setRedsDeck] = useState([])
    const [redsScore, setRedsScore] = useState(0)

    const [npcDeck, setNpcDeck] = useState([])
    const [npcScore, setNpcScore] = useState(0)


    
function   dealCards() {
    
  for(let i = 1; i <= 3; i++){

      if (redsDeck.length < 3){
          setRedsDeck(prev => { redsDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0])})
      }
      if(npcDeck.length < 3){
          setNpcDeck(prev =>{npcDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0])})
      }

     
     

  }

  console.log(redsDeck)
  console.log(npcDeck)
    
}
    return (
        <div className='area'>
        <button onClick={dealCards}>click me please</button>
            
            <Link className='center' to='/'>test</Link>
            <div className='Top-row'>
        
                 <Card title={redsDeck}/>
              
            </div>

            <div className='Bottom-row'>
            
                
                <Card title={npcDeck}/>
             
            </div>
        </div>
    );
}

export default Gamebord;
