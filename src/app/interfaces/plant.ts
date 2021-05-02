interface Image {
  copyright: string;
  id: number;
  image_url: string;
}

export interface Plant {
  id: number;
  common_name: string;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  images: {
    fruit: Image[];
    flower: Image[];
    habit: Image[];
  };
  family_common_name: string;
  family: string;
  genus_id: number;
  growth: {
    atmospheric_humidity: number;
    bloom_months: number;
    days_to_harvest: number;
    description: string;
    fruit_months: number;
    growth_months: number;
    light: number;
    ph_maximum: number;
    ph_minimum: number;
    row_spacing: {
      cm: number;
    }
    soil_humidity: number;
    soil_nutriments: number;
    soil_salinity: number;
    soil_texture: number;
    sowing: string;
    spread: {
      cm: number;
    }
  }
  genus: string;
  image_url: string;
  duration: string[];
  edible_part: string[];
  edible: boolean;
  vegetable: boolean;
  observations: string;
  common_names: object;
  distribution: object;
  synonyms: object[];
  sources: object[];
  extras: null;
}
