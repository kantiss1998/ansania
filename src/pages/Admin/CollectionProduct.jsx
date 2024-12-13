import React, { useState } from 'react';

const CollectionProduct = () => {
  const [collections, setCollections] = useState([]); // Collection products
  const [items, setItems] = useState([]); // Collection product items
  const [modal, setModal] = useState({ type: '', open: false, data: null });

  const openModal = (type, data = null) => {
    setModal({ type, open: true, data });
  };

  const closeModal = () => {
    setModal({ type: '', open: false, data: null });
  };

  const handleAddCollection = (newCollection) => {
    setCollections([...collections, { id: collections.length + 1, ...newCollection }]);
    closeModal();
  };

  const handleAddItem = (newItem) => {
    setItems([...items, { id: items.length + 1, ...newItem }]);
    closeModal();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Collection Product Management</h1>

      {/* Collections Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Collections</h2>
        <button 
          onClick={() => openModal('addCollection')}
          className="bg-green-500 text-white px-4 py-2 rounded mb-2"
        >
          Add Collection
        </button>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-2 py-1">ID</th>
              <th className="border border-gray-300 px-2 py-1">Name</th>
              <th className="border border-gray-300 px-2 py-1">Description</th>
              <th className="border border-gray-300 px-2 py-1">Image</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr key={collection.id}>
                <td className="border border-gray-300 px-2 py-1 text-center">{collection.id}</td>
                <td className="border border-gray-300 px-2 py-1">{collection.name}</td>
                <td className="border border-gray-300 px-2 py-1">{collection.description}</td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <img src={collection.image_url} alt={collection.name} className="w-10 h-10 object-cover" />
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-1 text-xs">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Collection Items Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Collection Items</h2>
        <button 
          onClick={() => openModal('addItem')}
          className="bg-green-500 text-white px-4 py-2 rounded mb-2"
        >
          Add Item
        </button>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-2 py-1">ID</th>
              <th className="border border-gray-300 px-2 py-1">Product ID</th>
              <th className="border border-gray-300 px-2 py-1">Collection ID</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-2 py-1 text-center">{item.id}</td>
                <td className="border border-gray-300 px-2 py-1 text-center">{item.product_id}</td>
                <td className="border border-gray-300 px-2 py-1 text-center">{item.collection_product_id}</td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-1 text-xs">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal.open && (
        <Modal 
          type={modal.type} 
          data={modal.data} 
          onClose={closeModal} 
          onAddCollection={handleAddCollection} 
          onAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

const Modal = ({ type, data, onClose, onAddCollection, onAddItem }) => {
  const [formData, setFormData] = useState(data || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'addCollection') onAddCollection(formData);
    if (type === 'addItem') onAddItem(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">
          {type === 'addCollection' && 'Add Collection'}
          {type === 'addItem' && 'Add Item'}
        </h2>

        <form onSubmit={handleSubmit}>
          {type === 'addCollection' && (
            <div>
              <label className="block mb-1 text-sm">Collection Name</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Image URL</label>
              <input
                type="text"
                value={formData.image_url || ''}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
          )}

          {type === 'addItem' && (
            <div>
              <label className="block mb-1 text-sm">Product ID</label>
              <input
                type="number"
                value={formData.product_id || ''}
                onChange={(e) => setFormData({ ...formData, product_id: e.target.value })}
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Collection ID</label>
              <input
                type="number"
                value={formData.collection_product_id || ''}
                onChange={(e) => setFormData({ ...formData, collection_product_id: e.target.value })}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
          )}

          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectionProduct;