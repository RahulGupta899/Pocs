

async function userMiddleware(dispatch){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    res = await res.json();
    console.log(res);
    res = JSON.stringify(res);

    dispatch({type: 'users_received',
              payload: res});

}
export default userMiddleware;