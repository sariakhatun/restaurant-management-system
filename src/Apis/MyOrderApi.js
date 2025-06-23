export let myOrdersPromise = (email,accessToken)=>{
    return fetch(`https://b11a11-server-side-sariakhatun.vercel.app/purchased?email=${email}`,{
        headers:{
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}