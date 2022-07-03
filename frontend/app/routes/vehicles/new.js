import Route from '@ember/routing/route';

export default class VehicleNewRoute extends Route {
    model() {
        return {}
    }

    actions = {
        save() {
            const newVehicle = this.store.createRecord('vehicle', this.currentModel)

            newVehicle.save().then((vehicle) => {
                this.transitionTo('vehicle.edit', vehicle)
            });
        },
        cancel() {
            this.transitionTo('vehicles.index')
        }
    }
}
