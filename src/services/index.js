import axios from "axios";

const api = "https://api.tvmaze.com";
const imgPlaceholder = "";

export const search = async query => {
  const result = await axios(`${api}/search/shows?q=${query}`);
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
  const result = await axios.get(`${api}/shows/${id}`);
  const { data } = result;
  data.image = imageUrl(data.image, data.names);
  data.genres = genreArrToStr(data.genres);
  return data;
};

function genreArrToStr(genres) {
  return genres.length > 0 ? genres.join(", ") : "no genre";
}

function imageUrl(arr, nameShow) {
  return arr !== null ? arr.medium : generatePlaceholderImg(nameShow);
}

function generatePlaceholderImg(name) {
  return `https://via.placeholder.com/210x295.png/000000/FFFFFF/?text=${name}`;
}
