import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import "./Admin.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    qty: "",
    price: "",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("qty", formData.qty);
    data.append("price", formData.price);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/products/${editingId}`, data);
      } else {
        await axios.post("http://localhost:5000/api/products", data);
      }

      fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Failed to save product", error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      qty: product.qty,
      price: product.price,
      image: null,
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      qty: "",
      price: "",
      image: null,
    });
    setEditingId(null);
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="product-panel">
        <h2>{editingId ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
          <input type="number" name="qty" value={formData.qty} onChange={handleChange} placeholder="Quantity" required />
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
          <input type="file" name="image" onChange={handleChange} accept="image/*" />
          <button type="submit">{editingId ? "Update" : "Add"} Product</button>
          {editingId && <button type="button" onClick={resetForm}>Cancel</button>}
        </form>

        <h3>📦 All Products</h3>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>Qty: {product.qty}</p>
              <p>Price: Rs{product.price}</p>
              <button onClick={() => handleEdit(product)}>✏️ Edit</button>
              <button onClick={() => handleDelete(product._id)} className="delete-btn">🗑 Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
