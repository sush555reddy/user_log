export const DELETE_USER = "DELETE_USER";
export const CREATE_USER = "CREATE_USER";
export const FETCH_USERS = "FETCH_USERS";

export function delete_user(username) {
  // fetch(`http://localhost:4000/deleteusers/${username}`).then(resp => {
  //   console.log(resp.json());
  // });
  // return {
  //   type: DELETE_USER,
  //   username: username
  // };

  return dispatch => {
    fetch(`http://localhost:4000/deleteusers/${username}`)
      .then(resp => {
        dispatch({
          type: DELETE_USER,
          uname: username
        });
      });
  };
}

export function create_user(userobj) {
  return dispatch => {
    fetch(
      `http://localhost:4000/createuser/${userobj.username}/${userobj.location}`
    )
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({
          type: CREATE_USER,
          data: respJSON
        });
      });
  };
}

// return dispatch => {
//   fetch("http://localhost:4000/createuser", {
//     method: "POST",
//     body: userobjz
//   })
//     .then(resp => resp.json())
//     .then(respJSON => {
//       dispatch({
//         type: CREATE_USER,
//         data: respJSON
//       });
//     });
// };

export function get_users() {
  return dispatch => {
    fetch("http://localhost:4000/getusers")
      .then(resp => resp.json())
      .then(respJSON => {
        dispatch({
          type: FETCH_USERS,
          data: respJSON
        });
      });
  };
}
