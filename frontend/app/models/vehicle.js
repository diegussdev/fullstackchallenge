import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default class VehicleModel extends Model {
    @attr('string') name;
    @attr('string') license_plate;
    @attr('string') brand;
    @attr('string') model;
    @attr('string') version;
    @attr('number') year;
    @attr('string') image;
    @attr('date', { readOnly: true }) created_at;
    @attr('date', { readOnly: true }) updated_at;
}