export let myOrdersPromise = (email)=>{
    return fetch(`https://b11a11-server-side-sariakhatun.vercel.app/purchased?email=${email}`)
    .then(res=>res.json())
}