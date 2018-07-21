import React, { Component } from "react";
class View extends Component {

    render(){
        return <div>
           {
               JSON.stringify(this.props)
           }
            </div>
    }
}
export default View;
