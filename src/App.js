import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import Seachbar from './components/Seachbar';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');



  // console.log(searchValue)


  useEffect(() => {
    // loader
    setLoading(true);

    // fetching api to get the data
    async function getProducts() {
      const apiData = await fetch('https://dummyjson.com/products');
      const data = await apiData.json();

      // console.log(data.products)
      if (data && data.products && data.products.length > 0) {
        setLoading(false);
        setProducts(data.products)
      }

    }
    getProducts();


  }, [])
  
  
  const filteredProducts =
    products && products.length > 0
      ? products.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase())
      ) : [];

  return (
    <div className="App">
      <Seachbar searchValue={searchValue} setSearchValue={setSearchValue}  />
      {loading ? <Loader /> : <Products products={filteredProducts} />}

    </div>
  );
}

export default App;
