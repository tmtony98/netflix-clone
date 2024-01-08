import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import "./Row.css"

function Row({title, fetchUrl, isposter}) {
  //js
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [allMovies, setAllMovies] = useState();

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    setAllMovies(data.results);
  };

 // console.log(allMovies);

  useEffect(() => {
    fetchData();
  }, []);
  //jsx
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movies-row">
        {
          allMovies?.map(item=>(
            <img className={`movie ${isposter && 'movie-poster'}`} src={`${base_url}/${isposter?item.poster_path:item?.backdrop_path}`} alt="netflix-series-images" />
          ))
        }
      </div>
    </div>
  );
}

export default Row;
