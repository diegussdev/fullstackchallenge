const Vehicle = require("../models/Vehicle");

class VehicleController {

    async store(req, res) {
        try {
            var vehicle = await Vehicle.create(req.body)
        } catch (error) {
            if (error['name'] == "SequelizeValidationError") {
                const errObj = {};
                error.errors.map( er => {
                    errObj[er.path] = er.message;
                })
                
                return res.json(errObj, 422)
            }
            
            return res.json(["Unexpected Error."], 500)
        }

        return res.json(vehicle, 201);
    }

    async index(req, res) {
        const page = req.query.page ? req.query.page : 1
        
        const limit = 5;
        const offset = (page - 1) * limit
        console.log(page)

        const options = { limit, offset }

        try {
            var vehicles = await Vehicle.findAndCountAll(options)
        } catch (error) {
            return res.json(["Unexpected Error."], 500)
        }

        const totalPages = Math.ceil(vehicles.count / limit)
        
        const response = {
            page,
            per_page: limit,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (totalPages > page) ? page + 1 : null,
            total_pages: totalPages,
            total: vehicles.count,
            data: vehicles.rows
        }

        return res.json(response)
    }

    async find(req, res) {
        const id = req.params.id

        try {
            var vehicles = await Vehicle.findByPk(id)
        } catch (error) {
            return res.json(["Unexpected Error."], 500)
        }

        if (!vehicles) {
            return res.status(404).send()
        }
        
        return res.json(vehicles)
    }

    async update(req, res) {
        const id = req.params.id
        const options = {
            where: { id }
        }

        try {
            await Vehicle.update(req.body, options)
        } catch (error) {
            if (error['name'] == "SequelizeValidationError") {
                const errObj = {};
                error.errors.map( er => {
                    errObj[er.path] = er.message;
                })
                
                return res.json(errObj, 422)
            }

            return res.json(["Unexpected Error."], 500)
        }

        return res.status(204).send()
    }

    async delete(req, res) {
        const id = req.params.id
        const options = {
            where: { id }
        }

        try {
            await Vehicle.destroy(options)
        } catch (error) {
            return res.json(["Unexpected Error."], 500)
        }

        return res.status(204).send()
    }

}

module.exports = new VehicleController()