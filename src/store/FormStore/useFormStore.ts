import { toast } from "sonner";
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
  error: FormError;

  validate: () => boolean;
  setFeild: (name: string, value: any) => void;
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

  setFeild: (name, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
      error: { ...state.error, [name]: "" },
    }));
  },

  validate: () => {
    const { formData } = get();
    let error: FormError = {};

    let Email = /^\S+@\S+\.\S+$/;
    if (!formData.fullName) error.fullName = "Name is required";
    // if (!formData.fullName) toast.error("Name is required");
    if (!formData.email) error.email = "Email is required";
    // if (!formData.email) toast.error("Email is required");
    else if (!Email.test(formData.email)) error.email = "Invalid email";
    if (!formData.phoneNumber) error.phoneNumber = "Phone Number is required";
    // if (!formData.phoneNumber) toast.error("Phone Number is required");
    else if (formData.phoneNumber.length < 10)
      error.phoneNumber = "Phone must have 10 digits";
    if (!formData.inquiryType) error.inquiryType = "InquiryType is required";
    // if (!formData.inquiryType) toast.error("InquiryType is required");

    // if (!formData.message) toast.error("Message is required");
    if (!formData.message) error.message = "Message is required";

    set({ error });
    return Object.keys(error).length === 0;
  },
}));
