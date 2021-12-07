import React, { useState, useEffect } from "react";
import axios from '../../api/axios';
import requests from "../../api/request";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Rows({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    // function axiosTest() {
    //     axios.get(requests.fetchHorrorMovies)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // };

    useEffect(() => {
        //axiosTest();
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    // const axiosTest = () => {
    //     axios.get(requests.fetchHorrorMovies)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err));
    // }

    // useEffect(()=> {
    //     axiosTest();
    // },[]);

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}
export default Rows;