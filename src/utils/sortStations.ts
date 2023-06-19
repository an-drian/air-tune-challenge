import type { IRadioStation } from "../app/slices/stations";

export function sortStationsByPopularity(stations: IRadioStation[]): IRadioStation[] {
  return [...stations].sort((a, b) => {
    if (a.popularity > b.popularity) return -1;
    if (a.popularity < b.popularity) return 1;
    
    return 0;
  })
}