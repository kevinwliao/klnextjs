// npm i --save-dev @types/d3 to fix
import * as d3 from "d3";

type movieObject = {
  imdbRating: number;
};

type rawDataType = {
  [key: string]: movieObject;
};

export async function fetchMovieData() {
  try {
    const rawData: rawDataType = await d3.json<any>(
      "https://raw.githubusercontent.com/sxywu/filmflowers/master/movies.json"
    );
    return rawData;
  } catch (error) {
    console.log("error!");
  }
}
