import React, {useState} from 'react'
// import { categories } from '../../helper/data'
function Card({crd}) {
    const [flip, setFlip] = useState(true)
    const onTurn = () => setFlip(turn => !turn)
        return (
     <div onClick = {onTurn}>
         {flip ? 
         <div>
     <img src = {crd.img} alt="" />
     <h2>{ crd.name}</h2></div>
     :
     <ul>
         <li>{crd.options[0]}</li>
         <li>{crd.options[1]}</li>
         <li>{crd.options[2]}</li>
     </ul>
    }
     </div>
    )
}
export default Card