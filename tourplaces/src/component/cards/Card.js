import React from "react";
import styles from "./cards.module.css";
function Card(props) {
    return(
        <div>
            <h2 className = {styles["card-frame"]}>Place Name</h2>
            <img src="https://picsum.photos/300/200" alt="place name"></img>
        </div>
    );
}
export default Card;