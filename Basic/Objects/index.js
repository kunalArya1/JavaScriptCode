const obj = [{
    name :"Kunal Kumar",
    username : "kunalArya",
    email : "kunal@gmail.com"
},
{
    name:"JayPraksah Kumar",
    useername:"jay",
    email:"jay@gmail.com"
},
{
    name:"papa",
    username:"papa",
    email:"papa@gmail.com"
},
{
    name:"Maa",
    username:"maa",
    email:"maa@gmail.com"
}
];

// Destructuring of Object 
// const { name,username,email} =obj;


obj.map((user)=>{
    console.log(user.name);  
})
