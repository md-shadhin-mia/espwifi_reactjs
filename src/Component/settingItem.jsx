import React, { Component } from 'react';
import {FaPen} from 'react-icons/fa'
class SettingItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit:false, value: this.props.propertyValue}
        this.onchange = this.onchange.bind(this);
        this.preval = this.props.propertyValue;
    }
    onchange(){
        if(this.preval !== this.state.value){
            this.props.onChange(this.state.value);
            this.preval = this.state.value;
        }
    }
    render() {
        const value = this.state.value;
        return ( <div className="item">
        <div className="name">{this.props.propertyName}</div>
        <div className="value">{
            this.state.isEdit? <input type="text" value={value} onChange={(e)=>this.setState({value:e.target.value})} id={this.props.propertyName+"-id"}/>
            : <span>{value}</span>
        }</div>
        <div className="edit">
        <label htmlFor={this.props.propertyName+"-id"} style={this.state.isEdit?{background:"#63ace5", padding:"1px 5px"}:{}} onClick={()=>{this.setState({isEdit:!this.state.isEdit});if(this.state.isEdit)this.onchange()}}> {this.state.isEdit?<span>OK</span>:<FaPen /> }</label>
        {this.state.isEdit?<button style={{marginLeft: "4px"}} onClick={()=>{this.setState({isEdit:!this.state.isEdit})}}>Cancel</button> : ""}
        </div>
        
      </div> );
    }
}
 
export default SettingItem;