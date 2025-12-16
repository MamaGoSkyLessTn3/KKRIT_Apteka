import { useEffect, useState } from "react";
import type { Doctor, Service } from "../types/service.ts";
import { fetchDoctors, fetchServices } from "../api/services/fetch.ts";

export const useFetchEntities = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isServicesLoading, setServicesLoading] = useState<boolean>(false);
  const [isDoctorsLoading, setDoctorsLoading] = useState<boolean>(false);

  const getServices = async () => {
    try {
      setServicesLoading(true);
      const { data } = await fetchServices();
      setServices(data);
    } catch (error) {
      console.error("REAL ERROR 👉", error);
    } finally {
      setServicesLoading(false);
    }
  };
  const getDoctors = async () => {
    try {
      setDoctorsLoading(true);
      const { data } = await fetchDoctors();
      setDoctors(data.doctors);
      console.log(data.doctors);
    } catch (error) {
      console.error("REAL ERROR 👉", error);
    } finally {
      setDoctorsLoading(false);
    }
  };
  useEffect(() => {
    getServices();
    getDoctors();
  }, []);
  return {
    doctors,
    services,
    isDoctorsLoading,
    isServicesLoading,
  };
};
