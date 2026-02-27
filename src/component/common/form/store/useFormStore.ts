import { create } from "zustand";

export interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  inquiryType: string;
  message: string;
}

export interface FormError {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  inquiryType?: string;
  message?: string;
}

export interface FormStore {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error: FormError;
  validate:()=>boolean;
}

export const useFormStore = create<FormStore>((set, get) => ({
  formData: {
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  },

  error: {},

  onChange: (e) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [e.target.name]: e.target.value,
      },
      error: { ...state.error, [e.target.name]: "" },
    }));
  },

  validate: () => {
    const { formData } = get();
    let error: FormError = {};

    if (!formData.fullName) error.fullName = "Name is required";
    if (!formData.email) error.email = "Email is required";
    if (!formData.phoneNumber) error.phoneNumber = "Phone Number is required";
    if (!formData.inquiryType) error.inquiryType = "InquiryType is required";
    if (!formData.message) error.message = "Message is required";

    set({error}) 
    return Object.keys(error).length === 0;
  },
}));
