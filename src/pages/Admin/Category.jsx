import React, { useState } from "react";

const initialCategories = [
  {
    id: 1,
    name: "Electronics",
    description: "Gadgets and devices",
    image: "https://via.placeholder.com/50",
    productCount: 12,
  },
  {
    id: 2,
    name: "Fashion",
    description: "Clothing and accessories",
    image: "https://via.placeholder.com/50",
    productCount: 20,
  },
];

const Category = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [modal, setModal] = useState({ type: "", open: false, data: null });

  const openModal = (type, data = null) => {
    setModal({ type, open: true, data });
  };

  const closeModal = () => {
    setModal({ type: "", open: false, data: null });
  };

  const handleSave = (data) => {
    if (modal.type === "add") {
      const newCategory = { ...data, id: Date.now(), productCount: 0 };
      setCategories([...categories, newCategory]);
    } else if (modal.type === "edit") {
      setCategories(categories.map((cat) => (cat.id === data.id ? data : cat)));
    }
    closeModal();
  };

  const handleUploadImage = (id, file) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, image: URL.createObjectURL(file) } : cat
      )
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    closeModal();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Category</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => openModal("add")}
      >
        Add Category
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Products</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-cover mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {category.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {category.description}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {category.productCount}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mx-1"
                  onClick={() => openModal("upload", category)}
                >
                  Upload Image
                </button>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mx-1"
                  onClick={() => openModal("edit", category)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mx-1"
                  onClick={() => openModal("delete", category)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal.open && (
        <Modal
          type={modal.type}
          data={modal.data}
          onClose={closeModal}
          onSave={handleSave}
          onDelete={handleDelete}
          onUploadImage={handleUploadImage}
        />
      )}
    </div>
  );
};

const Modal = ({ type, data, onClose, onSave, onDelete, onUploadImage }) => {
  const [form, setForm] = useState(
    data || { name: "", description: "", image: null }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && type === "upload") {
      onUploadImage(data.id, file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {type === "add"
            ? "Add Category"
            : type === "edit"
            ? "Edit Category"
            : type === "upload"
            ? "Upload Image"
            : "Delete Category"}
        </h2>
        {type === "delete" ? (
          <div>
            <p>Are you sure you want to delete "{data.name}"?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => onDelete(data.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : type === "upload" ? (
          <div>
            <label className="block text-gray-700 mb-2">Upload New Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded"
            />
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}
                type="button"
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Category;
