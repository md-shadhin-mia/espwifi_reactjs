import React, { Component } from 'react';
import "./editor.scss";
class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = { value:this.props.value };
        this.complete=this.complete.bind(this);
    }
    complete(){
        this.props.finish(this.state.value);
    }
    render() { 
        const value = this.state.value;
        return (
        <div className="editor">
            <div className="main">
                <label htmlFor="input1">{this.props.proparty}</label>
                <input type="text" value={value} id="input1" onChange={(e)=> this.setState({value:e.target.value})}/>
                <button onClick={this.complete}>OK</button>
                </div>            
        </div> 
        );
    }
}
 
export default Editor;