import { Plant } from './plant';

export interface ResultPlant {
  data: Plant;
  meta: {
    image_count: number;
    last_modified: string;
    sources_count: number;
    synonyms_count: number;
  }
}
