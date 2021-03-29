import React, { Component } from 'react';
import LoadPage from "./loadPage";
import WifiItem from "./wifiItem";
import "./new-wifi.scss";
class NewWifi extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoad:true }
    }
    render() { 
        return (
            this.state.isLoad ?
        <div className="newWifi">
            <h1>here wifi list</h1>
            <div className="wifitable">
                <table>
                    <tbody>
                    <WifiItem wifi={{name:"abul kahn", mac:"ab:cd:ee:ff:12:44"}}/>
                    <WifiItem wifi={{name:"kabul kahn", mac:"ab:cd:12:ee:ff:44"}}/>
                    <WifiItem wifi={{name:"jabul kahn", mac:"ab:cd:ee:12:ff:44"}}/>
                    </tbody>
                </table>
            </div>            
        </div> 
        : <LoadPage />
        );
    }
}
 
export default NewWifi;