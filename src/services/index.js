import axios from "axios";

const API = "https://api.tvmaze.com";

export const search = async query => {
  const result = await axios(`${API}/search/shows?q=${query}`);
  const { data } = result;

  const shows = data.map(s => {
    const { show } = s;

    show.genres = genreArrToStr(show.genres);
    show.image = show.image ? show.image.medium : null;

    return show;
  });

  return { shows };
};

export const getShow = async id => {
  const result = await axios.get(`${API}/shows/${id}`);
  const { data } = result;

  data.image = data.image ? data.image.medium : null;
  data.genres = genreArrToStr(data.genres);
  data.summary = noSummaryText(data.summary);
  data.premiered = dateFormatText(data.premiered);

  return data;
};

function genreArrToStr(genres) {
  return genres.length > 0 ? genres.join(", ") : "No genre.";
}

function noSummaryText(resume) {
  return resume !== null ? resume : "No summary.";
}

function dateFormatText(date) {
  return date ? date : "No date.";
}
