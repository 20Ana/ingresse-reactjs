import axios from "axios";

import { API, IMG_PLACEHOLDER } from "../constants";

export const search = async query => {
  const result = await axios(`${API}/search/shows?q=${query}`);
  const { data } = result;

  const shows = data.map(s => {
    const { show } = s;

    show.genres = genreArrToStr(show.genres);
    show.image = imageUrl(show.image, show.name);

    return show;
  });

  return { shows };
};

export const getShow = async id => {
  const result = await axios.get(`${API}/shows/${id}`);
  const { data } = result;
  data.image = imageUrl(data.image, data.name);
  data.genres = genreArrToStr(data.genres);
  data.summary = noSummaryText(data.summary);
  data.premiered = dateFormatText(data.premiered);

  return data;
};

function genreArrToStr(genres) {
  return genres.length > 0 ? genres.join(", ") : "No genre.";
}

function imageUrl(arr, nameShow) {
  return arr !== null ? arr.medium : generatePlaceholderImg(nameShow);
}

function noSummaryText(resume) {
  return resume !== null ? resume : "No summary.";
}

function generatePlaceholderImg(name) {
  return `${IMG_PLACEHOLDER}${name}`;
}

function dateFormatText(date) {
  return date ? date : "No date.";
}
