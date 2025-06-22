export let myOrdersPromise = email=>{
    return fetch(`http://localhost:3000/purchased?email=${email}`)
    .then(res=>res.json())
}