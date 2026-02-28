export interface InternshipPayload {
  name: string;
  phoneNumber: string;
  collage: string;         
  internshipRole: string;
  duration: number;
  member: number;         
  message?: string;
  date: string;
  time: string;
}

export interface InternshipResponse {
  success: boolean;
  message?: string;
}

