import Route from '@ember/routing/route';
import { computed } from '@ember/object';

export default class VehiclesRoute extends Route {
    queryParams = {
        page: {
            refreshModel: true
        }
    };

    model(params) {
        return this.store.query('vehicle', { page: params.page ? params.page : 1 });
    }
}
