// import { create } from "zustand";

// interface InternshipPayload {
//     name: string;
//     phoneNumber: string;
//     collage: string;
//     internshipRole: string;
//     duration: number;
//     member: number;
//     branch: string;
//     message?: string | null;
//     date: string;
//     time: string;
// }

// interface InternshipState {
//     loading: boolean;
//     success: boolean;
//     error: string | null;

//     submitApplication: (data: InternshipPayload) => Promise<void>;
//     resetState: () => void;
// }

// const API = process.env.NEXT_PUBLIC_API_URL || "";

// export const useInternshipStore = create<InternshipState>((set) => ({
//     loading: false,
//     success: false,
//     error: null,

//     submitApplication: async (data) => {
//         set({ loading: true, error: null, success: false });

//         try {
//             const res = await fetch(
//                 `${API}internshipForm/addInternshipForm`,
//                 {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(data),
//                 }
//             );
//             console.log(res)
//             if (!res.ok) {
//                 const text = await res.text();
//                 console.error("Server Error:", text);
//                 throw new Error("Server error");
//             }

//             const result = await res.json();

//             if (result.success) {
//                 set({ success: true });
//             } else {
//                 set({ error: result.message || "Submission failed" });
//             }
//         } catch (err) {
//             console.error("Internship API Error:", err);
//             set({ error: "Network error" });
//         } finally {
//             set({ loading: false });
//         }
//     },

//     resetState: () => {
//         set({ success: false, error: null });
//     },
// }));



import { create } from "zustand";

interface InternshipPayload {
  name: string;
  phoneNumber: string;
  collage: string;
  internshipRole: string;
  duration: number;
  member: number;
  branch: string;
  message?: string | null;
  date: string;
  time: string;
}

interface InternshipState {
  loading: boolean;
  success: boolean;
  error: string | null;
  isOpen: boolean;

  openForm: () => void;
  closeForm: () => void;

  submitApplication: (data: InternshipPayload) => Promise<void>;
  resetState: () => void;
}

const API = process.env.NEXT_PUBLIC_API_URL || "";

export const useInternshipStore = create<InternshipState>((set) => ({
  loading: false,
  success: false,
  error: null,
  isOpen: false,

  openForm: () => set({ isOpen: true }),
  closeForm: () => set({ isOpen: false }),

  submitApplication: async (data) => {
    set({ loading: true, error: null, success: false });

    try {
      const res = await fetch(
        `${API}internshipForm/addInternshipForm`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error("Server error");

      const result = await res.json();
      console.log(result)
      if (result.success) {
        set({ success: true });
      } else {
        set({ error: result.message || "Submission failed" });
      }
    } catch (err) {
      set({ error: "Network error" });
    } finally {
      set({ loading: false });
    }
  },

  resetState: () => {
    set({ success: false, error: null });
  },
}));