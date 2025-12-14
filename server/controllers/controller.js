const { Application, Doctor, Service } = require("../models/models");
const ApiError = require("./error/ApiError");

class MainController {
  async getAllDoctors(req, res) {
    const doctors = await Doctor.findAll();

    return res.json({ doctors });
  }

  async getAllServices(req, res) {
    const services = await Service.findAll();

    return res.json(services);
  }

  async createApplication(req, res, next) {
    try {
      const {
        full_name,
        email,
        date_time,
        birthday,
        serviceId,
        doctorId,
        comment,
      } = req.body;
      const application = await Application.create({
        full_name,
        doctorId,
        serviceId,
        email,
        date_time,
        birthday,
        comment,
      });
      return res.json(application);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new MainController();
