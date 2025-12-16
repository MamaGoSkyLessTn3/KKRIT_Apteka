export interface Service {
  id: number;
  title: string;
  price: string;
  description: string;
  duration: string;
  type: DOCTOR_TYPE;
}

export interface Doctor {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  avatar: string;
  description: string;
  experience: string;
  type: DOCTOR_TYPE;
}

// @ts-ignore
export enum DOCTOR_TYPE {
  THERAPIST = "Терапевт",
  CARDIOLOGIST = "Кардиолог",
  PEDIATRICIAN = "Педиатр",
}
export interface Application {
  full_name: string;
  email: string;
  date_time: string;
  birthday: string;
  serviceId: string;
  doctorId: string;
  comment: string;
}
