import React, { useEffect, useState } from "react";
import Details from "./Details";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../actions";

function HomeDisplay(props) {
  const [files, setFiles] = useState([]);
  const [isActive, setisActive] = useState(Boolean);
  const dispatch = useDispatch();

  const [isMovieClicked, setMovieClicked] = useState(Boolean);
  const [movieDetails, setmovieDetails] = useState({});

  const fetchTopResults = () => {
    fetch(
      "https://ott-details.p.rapidapi.com/advancedsearch?end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=20",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "ott-details.p.rapidapi.com",
          "x-rapidapi-key":
            "974135fdf9mshfd03b683d75e219p16b519jsn5a68621ea5ca",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setFiles(data.results);

        setisActive(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchTopResults();
  }, []);

  const clickedMovie = (item) => {
    console.log("clicked");
    setMovieClicked(true);
  };

  const movie = useSelector((state) => state);

  return (
    <div className="homedisplay">
      {isActive ? (
        <>
          {" "}
          {isMovieClicked ? (
            <Details files={movie} />
          ) : (
            <>
              {files.map((item, idx) => {
                let imgSrc = item.imageurl[0];
                let title = item.title;
                let year = item.released;

                return (
                  <>
                    <div
                      className="icontainer"
                      key={idx}
                      onClick={() => {
                        dispatch(setDetails(item));
                        setMovieClicked(true);
                      }}
                    >
                      <div className="imgcont">
                        {imgSrc != null ? <img src={imgSrc}></img> : null}
                      </div>
                      <div className="tit">{title}</div>
                      <div className="y">{year}</div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default HomeDisplay;
