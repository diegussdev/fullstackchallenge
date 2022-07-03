import Route from '@ember/routing/route';

export default class VehicleEditRoute extends Route {
    model(params) {
        return this.store.findRecord('vehicle', params.id)
    }

    actions = {
        save() {
            this.currentModel.save().then(() => {
                this.transitionTo('vehicles.index')
            });
        },
        cancel() {
            this.transitionTo('vehicles.index')
        }
    }
}
