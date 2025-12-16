export interface Service {
    id: string;
    title: string;
    price: string;
    description: string;
    duration: string;
    type: DOCTOR_TYPE
}

export interface Doctor {
    id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    avatar: string;
    description: string;
    experience: string;
    type: DOCTOR_TYPE
}

// @ts-ignore
export enum DOCTOR_TYPE {
    THERAPIST = "Терапевт",
    CARDIOLOGIST = "Кардиолог",
    PEDIATRICIAN = "Педиатр"
}