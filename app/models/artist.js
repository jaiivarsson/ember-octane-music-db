import Model, { attr } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr name;
  @attr('date') dateOfBirth;
  @attr bio;
  @attr image;
}
