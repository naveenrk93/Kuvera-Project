import React from 'react';
import {Link} from "react-router-dom";

class Homepage extends React.Component{


    render(){
        return(
            <div>
                <div className="plate">
                    <p className="shadow text1">KUVERA</p>
                    <p className="shadow text2">PROJECT</p>
                    <p className="script"><span>by Naveen</span></p>
                </div>
                <Link to={`/explore/`} onClick={(event)=>{event.stopPropagation()}} className="ui button red explore"><td>Explore Kuvera Funds</td></Link>
            </div>
        );
    }
}

export default Homepage