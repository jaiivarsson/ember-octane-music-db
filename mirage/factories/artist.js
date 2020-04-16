import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  dateOfBirth() {
    return faker.date.between('1935-01-01', '2000-12-31');
  },
  bio() {
    return faker.lorem.sentences(faker.random.number(3,6));
  },
  image() {
    return faker.image.imageUrl(640, 480, 'people', true);
  }
});
