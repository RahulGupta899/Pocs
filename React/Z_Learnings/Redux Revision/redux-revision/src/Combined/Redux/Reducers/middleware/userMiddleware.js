async function userMiddleware(dispatch){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    res = await res.json();
    res = JSON.stringify(res);
    console.log(res);

    dispatch({type:'USERS_RECEIVED',
              payload: res})
}
export default userMiddleware;





