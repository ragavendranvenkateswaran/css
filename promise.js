let a=new Promise((resolve,reject)=>{
    reject("hi i am resolve")
})
a.then(function(data){console.log})
.catch(err=>console.log(err))


fetch('https://dummyjson.com/products')
.then(data=>data.json())
.then(data=>{
    console.log(data)
})Z