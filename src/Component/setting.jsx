import React, { Component } from "react";
import "./setting.scss";
import LoadPage from "./loadPage";
import SettingItem from './settingItem';
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chages:null,
      settings:[],
      isLoad:false
    };
    this.onEditEnd = this.onEditEnd.bind(this);
    this.saveChage = this.saveChage.bind(this);
  }
  onEditEnd(value){
    this.setState({viewEdit:false});
    console.log(value);
  }

  saveChage(){
    // console.log(JSON.stringify(this.state.chages));
    // /*
    fetch(origin+"/setting", {
      method: "PUT",
      body: JSON.stringify(this.state.chages)
    })
    .then((res)=>res.json())
    .then(json=>{
      console.log(json);
    },
    (error)=>{
      console.log(error);
    }
    )
    // */
  }
  componentDidMount(){
    // this.setState({settings:[...this.state.settings, {proparty:"json",value:"work"}]})
    fetch(origin+"/config.json")
    .then((res)=>res.json())
    .then(json=>{
      this.setState({settings:[...this.state.settings, 
        {proparty:"SSID",value:json.softap.ssid},
        {proparty:"Password",value:json.softap.password},
        {proparty:"Host",value:json.server.host},
      ], isLoad :true
      });
    },
    (error)=>{
      console.log(error);
    }
    )
  }

  render() {
    const settings = [...this.state.settings];
    return (
      this.state.isLoad ? 
      <div className="setting">
        <h2>Settings</h2>
        <br/>
        <div className="propertics">
          {
            settings.map((value, index)=>{
              return <SettingItem key={index} onChange={(v)=>{this.setState({chages:{...this.state.chages,[value.proparty.toLowerCase()]:v}})}} propertyName={value.proparty} propertyValue={value.value} />
            })
          }
          {
            this.state.chages? <button onClick={this.saveChage}>Save Changes</button> : ""
          }
        </div>
      </div>
      :<LoadPage />
    );
  }
}

export default Setting;
