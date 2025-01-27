import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 'P001',
      name: 'Scope 1: Direct Emissions',
      price: 1999.99,
      stock: 25,
      type: 'Laptop',
      status: 'Active'
    },
    {
      id: 'P002',
      name: 'Scope 2: Electricity Consumption',
      price: 1199.99,
      stock: 50,
      type: 'Smartphone',
      status: 'Active'
    },
    {
      id: 'P003',
      name: 'Scope 3: Indirect Emisions',
      price: 2499.99,
      stock: 12,
      type: 'Electronics',
      status: 'Active'
    },
    {
      id: 'P004',
      name: 'Total GHG Emission',
      price: 169.99,
      stock: 80,
      type: 'Apparel',
      status: 'Active'
    },
    {
      id: 'P005',
      name: 'Bose Noise Cancelling Headphones 700',
      price: 379.99,
      stock: 30,
      type: 'Electronics',
      status: 'Active'
    }
  ]);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('/api/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);


  const handleEdit = (product) => {
    // Implement edit functionality
    console.log('Editing product:', product);
  };

  const handleDelete = (product) => {
    // Implement delete functionality
    console.log('Deleting product:', product);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#805AD5]">Scope Wise GHG Emission(tCO2e)</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#805AD5] text-white">
                <th className="px-6 py-4 text-left">FY2020-21</th>
                <th className="px-6 py-4 text-left">FY2021-22</th>
                <th className="px-6 py-4 text-right">FY2022-23</th>
                <th className="px-6 py-4 text-right">FY2023-24</th>
                <th className="px-6 py-4 text-left">FY2024-25</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.id}</td>
                  <td className="px-6 py-4 text-right">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">{product.stock}</td>
                  <td className="px-6 py-4">{product.type}</td>
                  <td className="px-6 py-4">{product.status}</td>
                  <td className="px-6 py-4 space-x-4">
                  <div className="space-x-4">
                  <div className="space-x-4">
                  <div className="flex space-x-4">
  <button
    className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-1 px-3 rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
    onClick={() => handleEdit(product)}
  >
    Edit
  </button>

  <button
    className="bg-red-600 hover:bg-red-800 text-white font-semibold py-1 px-3 rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
    onClick={() => handleDelete(product)}
  >
    Delete
  </button>
</div>


</div>

</div>


                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;