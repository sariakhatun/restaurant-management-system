export let myFoodsPromise = (email,accessToken)=>{
    return fetch(`http://localhost:3000/myFoods?email=${email}`,{
        headers:{
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}