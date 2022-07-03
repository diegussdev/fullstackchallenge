import Route from '@ember/routing/route';

export default class VehicleNewRoute extends Route {
    model() {
        return {}
    }

    actions = {
        save() {
            const newVehicle = this.store.createRecord('vehicle', this.currentModel)

            newVehicle.save().then((vehicle) => {
                this.transitionTo('vehicles.index')
            });
        },
        cancel() {
            this.transitionTo('vehicles.index')
        }
    }
}
