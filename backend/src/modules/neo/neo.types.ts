export interface NEODayData {
  id: string;
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
    };
  };
  close_approach_data: {
    relative_velocity: {
      kilometers_per_hour: string;
    };
    miss_distance: {
      kilometers: string;
    };
  }[];
}

export interface NEOApiResponse {
  element_count: number;
  near_earth_objects: Record<string, NEODayData[]>;
}
