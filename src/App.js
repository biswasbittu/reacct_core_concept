import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// const products=[
//   {name:'Laptop', price: 30000},
//   {name:'Phone', price: 35000},
//   {name:'watch', price: 3500},
//   {name:'tablate', price: 40000},
// ]

// 
// {
//   products.map(product=><Products name={product.name} price={product.price}></Products>)
// }

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setUsers(data)})

  },[])


  return (
    <div>
      <h1>External Users</h1>
      
      <p>{
        users.map(user=><User name={user.name} email={user.email} ></User>)
        }</p>
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'2px solid red',margin:"20px"}}>
      <h3>
        Name{props.name}
      </h3>
      <h4>Email:{props.email}</h4>
    </div>
  )
}

// function Counter(){
//   const [count, setCount]=useState(0);

//   const increaseCount=()=>setCount(count+1);

//   const decreaseCount=()=>setCount(count-1);

//   // {
//       // const newCount=count+1;

//     // }

//   // const increaseCount=()=>{
//   //   const newCount=count+1;
//   //   setCount(newCount)
//   // }

//   return(
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }







// function Products(props){
//   return(
//     <div className='product'>
//       <h3>Name:{props.name}</h3>
//       <p>Price:{props.price}</p>
//     </div>
//   )
//   }



export default App;
