import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArtistsDetailRoute extends Route {
  @service store;

  model(params) {
    return this.store.find('artist', params.artist_id);
  }
}
