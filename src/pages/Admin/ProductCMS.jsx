import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Predefined options for dropdowns
const CATEGORIES = ['Furniture', 'Electronics', 'Clothing', 'Home Decor'];
const BAHAN_OPTIONS = ['Wood', 'Metal', 'Plastic', 'Glass', 'Fabric'];
const FINISHING_OPTIONS = ['Glossy', 'Matte', 'Satin', 'Rustic'];

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wooden Chair',
      category: 'Furniture',
      bahan: 'Wood',
      finishing: 'Glossy',
      description: 'High-quality wooden chair',
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/151',
        'https://via.placeholder.com/152',
      ],
    }
  ]);

  const navigate = useNavigate()

  const handleDetail = (id) => {
    navigate(`/admin/product/${id}`);
  }

  const [modal, setModal] = useState({ 
    type: '', 
    open: false, 
    data: null 
  });

  const [imageUploadModal, setImageUploadModal] = useState({
    open: false,
    productId: null
  });

  const openModal = (type, data = null) => {
    setModal({ type, open: true, data });
  };

  const closeModal = () => {
    setModal({ type: '', open: false, data: null });
  };

  const openImageUploadModal = (productId) => {
    setImageUploadModal({ open: true, productId });
  };

  const closeImageUploadModal = () => {
    setImageUploadModal({ open: false, productId: null });
  };

  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: products.length + 1,
      images: []
    };
    setProducts([...products, productWithId]);
    closeModal();
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    closeModal();
  };

  const handleImageUpload = (productId, newImages) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { 
            ...product, 
            images: [...product.images, ...newImages] 
          } 
        : product
    ));
    closeImageUploadModal();
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
    closeModal();
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImagePreview = (images) => {
    setImagePreview(images);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      
      <button 
        onClick={() => openModal('add')}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New Product
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-2 py-1">ID</th>
              <th className="border border-gray-300 px-2 py-1">Name</th>
              <th className="border border-gray-300 px-2 py-1">Category</th>
              <th className="border border-gray-300 px-2 py-1">Material</th>
              <th className="border border-gray-300 px-2 py-1">Finishing</th>
              <th className="border border-gray-300 px-2 py-1">Images</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 px-2 py-1 text-center">{product.id}</td>
                <td className="border border-gray-300 px-2 py-1">{product.name}</td>
                <td className="border border-gray-300 px-2 py-1">{product.category}</td>
                <td className="border border-gray-300 px-2 py-1">{product.bahan}</td>
                <td className="border border-gray-300 px-2 py-1">{product.finishing}</td>
                <td className="border border-gray-300 px-2 py-1">
                  <div className="flex space-x-1">
                    {product.images.slice(0, 3).map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`Product ${index + 1}`} 
                        className="w-10 h-10 object-cover cursor-pointer"
                        onClick={() => handleImagePreview(product.images)}
                      />
                    ))}
                    <button
                      onClick={() => openImageUploadModal(product.id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    >
                      + Upload
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <button 
                    onClick={() => handleDetail(product.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-1 text-xs"
                  >
                    Detail
                  </button>
                  <button 
                    onClick={() => openModal('edit', product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-1 text-xs"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => openModal('delete', product)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal.open && (
        <ProductModal 
          type={modal.type} 
          data={modal.data} 
          onClose={closeModal}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      )}

      {imageUploadModal.open && (
        <ImageUploadModal
          productId={imageUploadModal.productId}
          onClose={closeImageUploadModal}
          onImageUpload={handleImageUpload}
        />
      )}

      {imagePreview && (
        <ImagePreviewModal 
          images={imagePreview} 
          onClose={() => setImagePreview(null)} 
        />
      )}
    </div>
  );
};

const ImageUploadModal = ({ productId, onClose, onImageUpload }) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    onImageUpload(productId, newImages);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Upload Images</h2>
        <input 
          type="file" 
          multiple 
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button 
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ 
  type, 
  data, 
  onClose, 
  onAddProduct, 
  onUpdateProduct,
  onDeleteProduct 
}) => {
  const [formData, setFormData] = useState(data || {
    name: '',
    category: '',
    bahan: '',
    finishing: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'add') {
      onAddProduct(formData);
    } else if (type === 'edit') {
      onUpdateProduct(formData);
    }
  };

  if (type === 'delete') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg shadow-xl w-96">
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete {data.name}?</p>
          <div className="flex justify-end space-x-2 mt-4">
            <button 
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => onDeleteProduct(data.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">
          {type === 'add' ? 'Add Product' : 'Edit Product'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <div>
              <label className="block mb-1 text-sm">Product Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData(prev => ({
                  ...prev, 
                  name: e.target.value
                }))}
                className="w-full border rounded px-2 py-1"
                required 
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({
                  ...prev, 
                  category: e.target.value
                }))}
                className="w-full border rounded px-2 py-1"
                required
              >
                <option value="">Select Category</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Material</label>
              <select
                value={formData.bahan}
                onChange={(e) => setFormData(prev => ({
                  ...prev, 
                  bahan: e.target.value
                }))}
                className="w-full border rounded px-2 py-1"
                required
              >
                <option value="">Select Material</option>
                {BAHAN_OPTIONS.map(bahan => (
                  <option key={bahan} value={bahan}>{bahan}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Finishing</label>
              <select
                value={formData.finishing}
                onChange={(e) => setFormData(prev => ({
                  ...prev, 
                  finishing: e.target.value
                }))}
                className="w-full border rounded px-2 py-1"
                required
              >
                <option value="">Select Finishing</option>
                {FINISHING_OPTIONS.map(finish => (
                  <option key={finish} value={finish}>{finish}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button 
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                {type === 'add' ? 'Add' : 'Update'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ImagePreviewModal = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600"
        >
          ✕
        </button>
        
        <div className="flex items-center">
          <button 
            onClick={handlePrevImage}
            className="mr-4 bg-gray-200 px-3 py-1 rounded"
          >
            ‹
          </button>
          
          <img 
            src={images[currentImageIndex]} 
            alt={`Preview ${currentImageIndex + 1}`} 
            className="max-w-md max-h-96 object-contain"
          />
          
          <button 
            onClick={handleNextImage}
            className="ml-4 bg-gray-200 px-3 py-1 rounded"
          >
            ›
          </button>
        </div>
        
        <div className="mt-4 text-center">
          Image {currentImageIndex + 1} of {images.length}
        </div>
      </div>
    </div>
  );
};

export default Products;