import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Laptop', price: 30000},
    {name:'Phone', price: 35000},
    {name:'watch', price: 3500},
    {name:'tablate', price: 40000},
  ]
  return (
    <div className="App">
      {
        products.map(product=><Products name={product.name} price={product.price}></Products>)
      }
     
    </div>
  );
}


function Products(props){
return(
  <div className='product'>
    <h3>Name:{props.name}</h3>
    <p>Price:{props.price}</p>
  </div>
)
}

export default App;
