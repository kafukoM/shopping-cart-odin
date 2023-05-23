import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import './paragraph.css'


const HomePage = () => {
    return (
    <>    
        <NavBar>
        
        </NavBar> 
        <div className="paragraph">
            <p className="paragraph-text">
        Discover the latest and greatest PlayStation games all in one place. Whether you're a fan of thrilling
        adventures, intense action, or mind-bending puzzles, we've got you covered. Browse through our vast collection
        of games and add them to your cart to build your ultimate gaming experience. Get ready to embark on epic
        quests, compete against friends, and immerse yourself in the world of PlayStation gaming.
        
            </p> 
            <Link to="/shop">
                <button className="button">SHOP NOW</button>
            </Link> 
            
        </div>
    </>
    )
}

export default HomePage