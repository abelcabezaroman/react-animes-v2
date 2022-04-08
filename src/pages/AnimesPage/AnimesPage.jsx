import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Slider from "../../components/Slider/Slider";
import { LoadingContext } from "../../contexts/LoadingContext";

export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);
  const { setIsLoading } = useContext(LoadingContext);
  // const getAnimes = async () => {
  //     const res = await fetch("https://kitsu.io/api/edge/anime");
  //     const resData = await res.json();
  //     console.log(resData.data);
  // }

  const getAnimes = async (offset = 12, animeSlugFiter = "") => {
    setIsLoading(true);
    const res = await axios.get(
      `https://kitsu.io/api/edge/anime?page%5Blimit%5D=12&page%5Boffset%5D=${offset}${animeSlugFiter}`
    );

    setAnimes(res.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAnimes();
  }, []);
  return (
    <div>
      {/* {animes.length !== 0 && <div className="mb-5"><Slider slides={animes}/></div>} */}

      <div className="mb-4">
        <Search
          onSubmit={(data) =>
            getAnimes(
              data.title.length !== 0 ? "&filter%5Bslug%5D=" + data.title : ""
            )
          }
        />
      </div>
      <Gallery list={animes} itemClassName="mb-3 col-12 col-md-4 col-lg-3" />
      <div className="my-4 d-flex justify-content-center">
        <Pagination onChangePage={getAnimes} />
      </div>
    </div>
  );
}
