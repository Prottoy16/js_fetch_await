// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body:JSON.stringify({
//         P_name:"Prottoy",
//         P_Id:221,
//         P_roll:1
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })



// .then((res)=> {
//     if(!res.ok){
//         let message= `Error :${res.status}`;
//         throw message;
//     }
//     else {
//         return res.json();
//     }
// })
    
 
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


const getData=async (url)=>{

    let data=await fetch(url);
    if(!data.ok){
        throw "Data is corrupted";
    }
    else {
        return  data.json();
    }

}

function call(url){

    getData(url)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));

}

call("https://jsonplaceholder.typicode.com/posts");
call("https://jsonplaceholder.typicode.com/posts/1");

const setData=async (url,config)=>{
let data=await fetch(url,config);
if(!data.ok){
    throw new Error("This is setData error");
}
else{
    return data.json();
}
}

callSetData=(url,config)=>{
    setData(url,config)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}
callSetData("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
  body: JSON.stringify({
    title: 'hi',
    body: 'his',
    userId: 31,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});