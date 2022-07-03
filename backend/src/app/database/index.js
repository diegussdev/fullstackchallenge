const Sequelize = require("sequelize")

const Vehicle = require("../models/Vehicle")

const databaseConfig = require("../../config/database.json")

const models = [
    Vehicle
];

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database()