import {useState} from "react";
import bird from  './svg/svg/bird.svg';
import cat from  './svg/svg/cat.svg';
import cow from  './svg/svg/cow.svg';
import gator from  './svg/svg/gator.svg';
import dog from  './svg/svg/dog.svg';
import horse from './svg/svg/horse.svg';
import heart from './svg/svg/heart.svg';
import './AnimalShow.css';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}){
    const [clicks,setClicks]= useState(0);
    const handleClick=()=>{
        setClicks(clicks+1);
    }
return( <div>
    <div className="animal-show" onClick={handleClick}>
        <img className="animal" alt="animal" src={svgMap[type]}/>
        <img className="heart" src={heart} style={{width:10+10*clicks}}/>
    </div>
</div>);
}
export default AnimalShow