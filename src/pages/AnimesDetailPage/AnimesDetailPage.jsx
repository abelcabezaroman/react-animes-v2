import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";

export default function AnimesDetailPage() {
  const { idAnime } = useParams();
  const [animeDetail, setAnimeDetail] = useState();

  useEffect(() => {
    const getAnime = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/anime/" + idAnime);
      console.log(res);
      setAnimeDetail(res.data.data);
    };

    getAnime();
  }, []);

  useEffect(() => {
    console.log("Me inicio");
  }, []);

  useEffect(() => {
    console.log("Cambia animeDetail");
  }, [animeDetail]);

  useEffect(() => {
    return () => {
        console.log("Me destruyo");
    }
  }, []);


  return (
    <div>
      <CardDetail data={animeDetail} />
    </div>
  );
}
