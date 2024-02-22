import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import Dropdown from './Dropdown';
import MultiSelect from './MultiSelect';

function Products() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const options = [
    { label: 'All', value: 'all' },
    { label: 'Watch', value: 'watch' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Mobile', value: 'mobile' },
  ];

  const getProducts = async () => {
    const data = await fetch("https://api.pujakaitem.com/api/products");
    const json = await data.json();
    setLoading(true);
    setProductList(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSortChange = (option) => {
    setSortBy(option);
    console.log('Sorting by:', option);
  };

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
    console.log('Selected categories:', selectedOptions);
  };

  if (productList === null) {
    return <div>Loading...</div>;
  }

  let filteredProducts = [...productList];

  if (sortBy === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
    filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-2xl font-semibold'>Products</span>
      <div className='flex gap-4'>
        <Dropdown options={[
          { label: 'Price High To Low', value: 'highToLow' },
          { label: 'Price Low To High', value: 'lowToHigh' }
        ]} onChange={handleSortChange} />
        <MultiSelect options={options} onChange={handleCategoryChange} />
      </div>
      <div className='flex flex-wrap flex-row gap-4 items-center justify-center'>
        {filteredProducts.map((productInfo) => (
          <Link key={productInfo.id} to={`/singleProduct?id=${productInfo.id}`}>
            <ProductItem productInfo={productInfo} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
