import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import Container from "../components/Container";
import Card from "../components/Card";
import { AppDispatch } from "../app/store";
import Loader from "../components/Loader";
import Tag from "../components/Tag";
import { useNavigate } from 'react-router-dom';

import { fetchStations, popularStationsSelector } from "../app/slices/stations";
import Grid from "../components/Grid";

function Main() {
  const { stations, loading } = useSelector(popularStationsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const [tagsToFilterBy, setTagsToFilterBy] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchStations());
  }, []);

  function onTagClickHandler(tag: string) {
    const newTagsArray = [...tagsToFilterBy].concat(tag);
    setTagsToFilterBy([...new Set(newTagsArray)]);
  }

  function deleteTagToFilterBy(tag: string) {
    setTagsToFilterBy(tagsToFilterBy.filter(t => t !== tag))
  }

  function onPlayHandler(stationId: string) {
    navigate(`station/${stationId}`)
  }

  const filteredByTagsStations = useMemo(() => {
    if (!tagsToFilterBy.length) return stations;

    return stations.filter((station) =>
      station.tags.some((tag) => tagsToFilterBy.includes(tag))
    );
  }, [stations, tagsToFilterBy]);

  return (
    <div>
      <Container>
        {loading ? (
          <Loader centered fullscreen />
        ) : (
          <>
            <div className="flex flex-row justify-between items-center">
              <h2 className="mb-2 py-3 text-2xl font-bold tracking-tight text-gray-700 font-semibold">
                Popular Stations
              </h2>
              <div className="w-auto flex flex-row">
                {tagsToFilterBy.map((tag) => (
                  <Tag key={tag} name={tag} onClick={() => deleteTagToFilterBy(tag)} />
                ))}
              </div>
            </div>
            <Grid cols={5} gap={4}>
              {filteredByTagsStations.map((station) => (
                <Card
                  key={station.id}
                  title={station.name}
                  imgPath={station.imgUrl}
                  tags={station.tags}
                  onTagClick={onTagClickHandler}
                  onPlayClick={() => onPlayHandler(station.id)}
                />
              ))}
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
}

export default Main;
