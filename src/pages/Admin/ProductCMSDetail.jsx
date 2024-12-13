import React, { useState } from "react";

const ProductCMSDetail = () => {
  const [sizes, setSizes] = useState([]); // Product sizes
  const [colors, setColors] = useState([]); // Product colors
  const [variants, setVariants] = useState([]); // Product variants

  const [modal, setModal] = useState({ type: "", open: false, data: null });

  const openModal = (type, data = null) => {
    setModal({ type, open: true, data });
  };

  const closeModal = () => {
    setModal({ type: "", open: false, data: null });
  };

  // Handlers for adding/editing/deleting sizes, colors, and variants
  const handleAddSize = (newSize) => {
    setSizes([...sizes, { id: sizes.length + 1, ...newSize }]);
    closeModal();
  };

  const handleAddColor = (newColor) => {
    setColors([...colors, { id: colors.length + 1, ...newColor }]);
    closeModal();
  };

  const handleAddVariant = (newVariant) => {
    setVariants([...variants, { id: variants.length + 1, ...newVariant }]);
    closeModal();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Detail Management</h1>

      {/* Sizes and Colors */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sizes & Colors</h2>

        {/* Sizes Table */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Sizes</h3>
          <button
            onClick={() => openModal("addSize")}
            className="bg-green-500 text-white px-4 py-2 rounded mb-2"
          >
            Add Size
          </button>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-2 py-1">ID</th>
                <th className="border border-gray-300 px-2 py-1">Name</th>
                <th className="border border-gray-300 px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size) => (
                <tr key={size.id}>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {size.id}
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {size.name}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-1 text-xs">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Colors Table */}
        <div>
          <h3 className="text-lg font-medium mb-2">Colors</h3>
          <button
            onClick={() => openModal("addColor")}
            className="bg-green-500 text-white px-4 py-2 rounded mb-2"
          >
            Add Color
          </button>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-2 py-1">ID</th>
                <th className="border border-gray-300 px-2 py-1">Name</th>
                <th className="border border-gray-300 px-2 py-1">Image</th>
                <th className="border border-gray-300 px-2 py-1">Hex Code</th>
                <th className="border border-gray-300 px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {colors.map((color) => (
                <tr key={color.id}>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {color.id}
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    {color.name}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    <img
                      src={color.image_url}
                      alt={color.name}
                      className="w-10 h-10 object-cover"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {color.hex_code}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-1 text-xs">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Variants */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Variants</h2>
        <button
          onClick={() => openModal("addVariant")}
          className="bg-green-500 text-white px-4 py-2 rounded mb-2"
        >
          Add Variant
        </button>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-2 py-1">ID</th>
              <th className="border border-gray-300 px-2 py-1">Size</th>
              <th className="border border-gray-300 px-2 py-1">Color</th>
              <th className="border border-gray-300 px-2 py-1">Price</th>
              <th className="border border-gray-300 px-2 py-1">Stock</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => (
              <tr key={variant.id}>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {variant.id}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {sizes.find((size) => size.id === variant.size_id)?.name}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {colors.find((color) => color.id === variant.color_id)?.name}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  ${variant.price}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  {variant.stock}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-1 text-xs">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                    Delete
                  </button>
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
          onAddSize={handleAddSize}
          onAddColor={handleAddColor}
          onAddVariant={handleAddVariant}
        />
      )}
    </div>
  );
};

const Modal = ({
  type,
  data,
  onClose,
  onAddSize,
  onAddColor,
  onAddVariant,
}) => {
  const [formData, setFormData] = useState(data || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "addSize") onAddSize(formData);
    if (type === "addColor") onAddColor(formData);
    if (type === "addVariant") onAddVariant(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">
          {type === "addSize" && "Add Size"}
          {type === "addColor" && "Add Color"}
          {type === "addVariant" && "Add Variant"}
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Conditional form fields based on modal type */}
          {type === "addSize" && (
            <div>
              <label className="block mb-1 text-sm">Size Name</label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
          )}

          {type === "addColor" && (
            <div>
              <label className="block mb-1 text-sm">Color Name</label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Image URL</label>
              <input
                type="text"
                value={formData.image_url || ""}
                onChange={(e) =>
                  setFormData({ ...formData, image_url: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Hex Code</label>
              <input
                type="text"
                value={formData.hex_code || ""}
                onChange={(e) =>
                  setFormData({ ...formData, hex_code: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
          )}

          {type === "addVariant" && (
            <div>
              <label className="block mb-1 text-sm">Size ID</label>
              <input
                type="number"
                value={formData.size_id || ""}
                onChange={(e) =>
                  setFormData({ ...formData, size_id: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Color ID</label>
              <input
                type="number"
                value={formData.color_id || ""}
                onChange={(e) =>
                  setFormData({ ...formData, color_id: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Price</label>
              <input
                type="number"
                value={formData.price || ""}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                required
              />

              <label className="block mb-1 text-sm">Stock</label>
              <input
                type="number"
                value={formData.stock || ""}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
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

export default ProductCMSDetail;
