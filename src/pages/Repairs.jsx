import React, { useState } from "react";

const Repairs = () => {
  const [form, setForm] = useState({
    name: "",
    deviceType: "Phone",
    model: "",
    description: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const message = `Repair Request:%0A%0AName: ${encodeURIComponent(
      form.name
    )}%0ADevice Type: ${encodeURIComponent(
      form.deviceType
    )}%0AModel: ${encodeURIComponent(
      form.model
    )}%0AProblem Description: ${encodeURIComponent(form.description)}`;
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setSending(false);
  };

  return (
      <div className="w-full bg-white p-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 mb-2 tracking-tight">
          Repair Services
        </h1>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8 text-sm md:text-lg">
          We offer professional repair services for Phones and Laptops. Fill the
          form below to request a repair and we’ll get back to you via WhatsApp!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto rounded-2xl md:shadow-2xl md:p-8 md:border border-gray-100">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Device Type
            </label>
            <select
              name="deviceType"
              value={form.deviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Model
            </label>
            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="e.g. iPhone 13, HP Pavilion..."
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Problem Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Describe the issue with your device..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 text-lg disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Request via WhatsApp"}
          </button>
        </form>
      </div>
  );
};

export default Repairs;
