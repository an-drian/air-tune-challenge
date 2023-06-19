import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import Container from "../components/Container";
import { stationByIdSelector, fetchStations } from "../app/slices/stations";
import { setStreamUrl, streamUrlSelector } from "../app/slices/stream";
import { useParams } from "react-router-dom";
import { Tag } from "../components/Tag";
import Grid from "../components/Grid";

const Station = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();
  const station = useSelector((state: RootState) =>
    stationByIdSelector(state, id!)
  );

  const { available } = useSelector(streamUrlSelector);

  useEffect(() => {
    if (!station) {
      dispatch(fetchStations());
    }

    if (station) {
      dispatch(setStreamUrl(station.streamUrl));
    }
  }, [station, dispatch]);

  return (
    <Container>
      <Grid cols={6} gap={4}>
        <div className="col-span-5">
          <h2 className="mb-2 py-3 text-2xl font-bold tracking-tight text-gray-700">
            {station?.name}
          </h2>
          <p className="text-gray-600">{station?.description}</p>
        </div>
        <div className="flex justify-end">
          <img src={station?.imgUrl} alt="" />
        </div>
        <div className="flex flex-nowrap col-span-6">
          {station?.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <div className="col-span-6 flex">
          {!available && (
            <div className="border rounded-md border-red-400 p-3">
              <h4 className="mb-2 py-3 text-xl text-red-600">
                {!available &&
                  "We're sorry, but the station is currently unavailable"}
              </h4>
            </div>
          )}
        </div>
      </Grid>
    </Container>
  );
};

export default Station;
