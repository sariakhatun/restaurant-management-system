export let myFoodsPromise = (email,accessToken)=>{
    return fetch(`https://b11a11-server-side-sariakhatun.vercel.app/myFoods?email=${email}`,{
        headers:{
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}