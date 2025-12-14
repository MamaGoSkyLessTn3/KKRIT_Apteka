export interface Service {
    id: string;
    title: string;
    price: string;
    description: string;
    duration: string;
}

export enum TYPE {
    Терапевт = "Терапевт",
    Кардиолог = "Кардиолог",
    Педиатор = "Педиатор"
}