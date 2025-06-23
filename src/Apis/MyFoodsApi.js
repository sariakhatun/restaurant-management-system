export let myFoodsPromise = (email)=>{
    return fetch(`https://b11a11-server-side-sariakhatun.vercel.app/foods?email=${email}`)
    .then(res=>res.json())
}