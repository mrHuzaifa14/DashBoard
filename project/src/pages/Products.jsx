import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain object-center"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 truncate">{product.title}</h3>
          <p className="mt-2 text-indigo-600 font-medium">${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;