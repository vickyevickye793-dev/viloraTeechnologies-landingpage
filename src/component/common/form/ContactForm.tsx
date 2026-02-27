"use client";

import { useFormStore } from "./store/useFormStore";

const ContactForm = () => {
  const { formData, error, onChange, validate } = useFormStore();

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 w-full max-w-3xl shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 text-center sm:text-left">
          Feel free to <span className="text-blue-500">get in touch</span> or
          <br className="hidden sm:block" />
          visit our location.
        </h1>

        <form  className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">
                Full name<span className="text-red-500">*</span>
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={onChange}
                type="text"
                className="bg-transparent border-b border-gray-400 outline-none text-gray-800 py-2 focus:border-blue-500 transition-colors"
              />
              {error.fullName && <span>{error.fullName}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={onChange}
                type="email"
                className="bg-transparent border-b border-gray-400 outline-none text-gray-800 py-2 focus:border-blue-500 transition-colors"
              />
              {error.email && <span>{error.email}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={onChange}
                type="tel"
                className="bg-transparent border-b border-gray-400 outline-none text-gray-800 py-2 focus:border-blue-500 transition-colors"
              />
              {error.phoneNumber && <span>{error.phoneNumber}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Inquiry Type</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={onChange}
                className="bg-transparent border-b border-gray-400 outline-none text-gray-600 py-2 focus:border-blue-500 transition-colors cursor-pointer"
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option></option>
                <option>Support</option>
                <option>Sales</option>
                <option>Other</option>
              </select>
              {error.inquiryType && <span>{error.inquiryType}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              placeholder="Type message"
              rows={4}
              className="bg-transparent border-b border-gray-400 outline-none text-gray-800 py-2 resize-none placeholder-gray-400 focus:border-blue-500 transition-colors"
            />
            {error.message && <span>{error.message}</span>}
          </div>

          <div className="border-t border-gray-200" />

          <div className="flex justify-center items-center sm:justify-end">
            <button
              type="submit"
              onClick={validate}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                →
              </span>
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
