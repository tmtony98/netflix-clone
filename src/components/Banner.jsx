import React, { useEffect, useState } from "react";
import "./Banner.css";
import tmdbAxiosInstance from "../tmdbAxiosInstance";

function Banner({ fetchUrl }) {
  //js part`
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movie, setMovie] = useState({});
  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    console.log(data.results[Math.floor(Math.random() * data.results.length)]);
    setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
   // console.log(movie);
  };

  console.log(movie);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div  className="row" style={{ width: "100%",backgroundRepeat:"no-repeat" ,height: "480px" 
        ,backgroundSize:"cover",backgroundImage:`url(${base_url}/${movie?.backdrop_path})`}} >
        <div className="col-lg-6  col-md-12">  <div className="div p-5">
            <h1 style={{fontSize:"55px"}} className=" fw-bold mt-5">{movie.name}</h1>
            <p style={{fontSize:'14px'}}>{movie.overview}</p>
            <button className="btn btn-danger btn-rounded">Play Now</button>
            <button className="btn btn-danger btn-rounded mx-4"> Add to Watch</button>

          </div>
          </div>
        <div className="col-lg-5 col-md-12">
          
        </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
