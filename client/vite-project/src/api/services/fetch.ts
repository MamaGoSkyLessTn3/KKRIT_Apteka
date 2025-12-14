import {$host} from "../instance.ts";
import type {Service} from "../../types/service.ts";

export const fetchServices = async () => {
    return $host.get<Service[]>('api/services');

}

export const fetchDoctors = async () => {
    const {data} = await $host.get('api/doctors');
    return data
}