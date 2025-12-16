import {$host} from "../instance.ts";
import type {Doctor, Service} from "../../types/service.ts";

export const fetchServices = async () => {
    return $host.get<Service[]>('api/services');

}

export const fetchDoctors = async () => {
    return $host.get<{ doctors: Doctor[] }>('api/doctors');
}