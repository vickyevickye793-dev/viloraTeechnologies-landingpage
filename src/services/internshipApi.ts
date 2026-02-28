import { InternshipPayload, InternshipResponse } from "../type/internship/internship.type";


const API = process.env.NEXT_PUBLIC_API_URL;

export const addInternshipApplication = async (data: InternshipPayload): Promise<InternshipResponse> => {
  try {
    const res = await fetch(`${API}internshipForm/addInternshipForm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // console.log(res.formData)
    return await res.json();
  } catch (error) {
    console.error("Internship API Error:", error);
    return {
      success: false,
      message: "Network error",
    };
  }
};
