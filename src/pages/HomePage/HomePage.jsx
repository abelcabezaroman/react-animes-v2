import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import Gallery from "../../components/Gallery/Gallery";
import Slider from "../../components/Slider/Slider";

export default function HomePage() {
  const [animes, setAnimes] = useState([]);
  const [animesPopEm, setAnimesPopEm] = useState([]);
  const [animesMostWanted, setAnimesMostWanted] = useState([]);
  const [animesAvg, setAnimesAvg] = useState([]);
  const [animesPop, setAnimesPop] = useState([]);

  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const getData = async (url, setFn) => {
      setIsLoading(true);
      const res = await axios.get(url);

      setFn(res.data.data);
      setIsLoading(false);
    };

    getData("https://kitsu.io/api/edge/trending/anime?limit=6", setAnimes);
    getData(
      "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count",
      setAnimesPopEm
    );
    getData(
      "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count",
      setAnimesMostWanted
    );
    getData(
      "https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating",
      setAnimesAvg
    );
    getData(
      "https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count",
      setAnimesPop
    );

    
  }, []);

  return (
    <div>
      {animes.length !== 0 && <Slider slides={animes}/>}

      <h2>Animes populares esta semana</h2>
      <Gallery list={animes} />

      <h2>Animes más populares en emisión</h2>
      <Gallery list={animesPopEm} />

      <h2>Animes más esperados</h2>
      <Gallery list={animesMostWanted} />

      <h2>Animes mejor evaluados</h2>
      <Gallery list={animesAvg} />

      <h2>Animes más populares</h2>
      <Gallery list={animesPop} />
    </div>
  );
}
