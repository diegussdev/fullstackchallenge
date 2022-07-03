import DS from 'ember-data'

export default class ApplicationSerializer extends DS.JSONSerializer {

    attrs = {
        created_at: { serialize: false },
        updated_at: { serialize: false }
    };

    normalizeQueryResponse(store, type, payload) {
        var data = [];

        payload.data.forEach((element, index) => {
            var obj = {}
            Ember.set(obj, 'id', element.id)
            Ember.set(obj, 'type', type.modelName)
            Ember.set(obj, 'attributes', element)
            data[index] = obj
        });

        var meta = {};
        var pages = [];

        for (var page = 1; page <= payload.total_pages; page++) {
            pages[page] = page;
        }
        
        meta.pagination = {
            pages: pages
        };

        return {
            data: data,
            meta: meta
        };
    }
}
