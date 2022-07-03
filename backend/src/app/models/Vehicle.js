const Sequelize = require("sequelize")

class Vehicle extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                license_plate: Sequelize.STRING,
                brand: Sequelize.STRING,
                model: Sequelize.STRING,
                version: Sequelize.STRING,
                year: { type: Sequelize.INTEGER, validate: { isInt: true } },
                image: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'vehicles',
                timestamps: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        )

        return this
    }
}

module.exports = Vehicle