import React from 'react';
import "./loadpage.scss";
import {ReactComponent as HudLoad} from "../media/hudloading.svg"
const LoadPage = () => {
    return ( <div className="load">
        <div className="loadhud"><HudLoad /></div>
        <h2>Loading....</h2>
    </div> );
}
 
export default LoadPage;