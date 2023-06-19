import { AxiosResponse } from "axios";
import axiosInstance from "./";
import { IRadioStation } from "../app/slices/stations";


export async function getStations(): Promise<IRadioStation[]> {
  try {
    const response: AxiosResponse<{ data: IRadioStation[]}> = await axiosInstance.get('/stations.json');
    const stations: IRadioStation[] = response.data.data;

    return stations;
  } catch (error) {
    console.error(error);
    return [];
  }
}
