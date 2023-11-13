import React, { Component } from "react";
export default class Faculty extends Component {

    constructor(props) {
        super(props)
        this.myFaculty = this.props.f
        
    }
    render(){
        return(
        <div>
            <h1>Faculty Component</h1>
            <h3>{this.props.f.fnm} </h3>
            <h3>{this.props.f.nnm} </h3>
            <h3>{JSON.stringify(this.props)}</h3>

            <h3>this.myFaculty.fnm</h3>
            <h3>this.myFaculty.nnm</h3>
        </div>
        )

    }
}