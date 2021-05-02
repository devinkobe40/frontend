import { Species } from './species';
import { Paginate } from './paginate';

export interface Result {
  data: Species[];
  links: Paginate;
}
