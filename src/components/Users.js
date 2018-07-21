import React, { Component } from "react";
import { Link } from "react-router-dom";
import { delete_user,get_users } from "../actions/users";
import {connect} from 'react-redux';

class Users extends Component {
  state = {
    users: ""
  };

  onDelteUser = username => {
    this.props.dispatch(delete_user(username));
  };

  componentDidMount() {
    this.props.dispatch(get_users());
  }
  
  render() {
    const users = this.props.data;
    return <div>
        <ul>
          {users &&
            users.map((item, index) => {
              return (
                <li key={index}>
                  {item.username + "," + item.location}
                  <Link to={"/view/" + index}>View</Link>
                  <button onClick={() => this.onDelteUser(item.username)}>
                    delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>;
  }
}
function mapStateToProps(data){
  // console.log(data.users);

  return {
    data : data.users
  };
}

export default connect(mapStateToProps)(Users);
