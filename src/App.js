import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:"laptop",price:53000},
    {name:"phone",price:75000},
    {name:"watch",price:5000},
    {name:"table",price:45000}
  ]
  return (
    <div className="App">
      {/* <Product name="laptop" price="24000"></Product>
      <Product name="phone" price="75000"></Product> */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }    
    </div>
  );
}
function Product(props){
  return(
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
