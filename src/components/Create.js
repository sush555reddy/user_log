import React, { Component } from "react";
import serializeForm from 'form-serialize';
import {Prompt,withRouter } from 'react-router-dom';
import {create_user} from '../actions/users';
import {connect} from 'react-redux';


class Create extends Component {

    state ={
        username:'',
        location:'',
        valid:true
    }
    createUser =(event) =>{
        event.preventDefault();
        var userobj= serializeForm(event.target,{hash:true});
        this.props.dispatch(create_user(userobj));
        this.setState({
            username:'',
            location:'',
            valid:true
        }, () => {
            this.props.history.push('/users');      
        });
    }

    componentDidMount(){
    }

    trackInput = (event) =>{
        var updateState ={};
        updateState[event.target.name] = event.target.value;
        updateState.valid = false;
        this.setState(updateState);
    }

    render(){
        return <div>
            <Prompt when = {this.state.valid == false} message="Leaving this state will loss data"/>
            <form onSubmit = {this.createUser} >
                <input type="text" onChange={this.trackInput} placeholder="username"name="username"/><br/>
                <input type="text" onChange={this.trackInput} placeholder="location"name="location"/><br/>
                <button  > Create</button>
                </form>

            </div>          
    }
}
function mapStateToProps(data){
   // console.log(data.users);
    return {
      data : data.users
    };
  }
export default connect(mapStateToProps)(Create);