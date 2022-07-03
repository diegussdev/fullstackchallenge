const Vehicle = require("../models/Vehicle");

class VehicleController {

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

}

module.exports = new VehicleController()