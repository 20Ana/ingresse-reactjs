import axios from "axios";

const api = "http://api.tvmaze.com";
const imgPlaceholder = "https://via.placeholder.com/210x295";

export const search = async query => {
  const result = await axios(`${api}/search/shows?q=${query}`);

  const shows = result.data.map(s => {
    s.show.genres =
      s.show.genres.length > 1 ? s.show.genres.join(", ") : s.show.genres[0];

    s.show.image = s.show.image !== null ? s.show.image.medium : imgPlaceholder;

    return s.show;
  });

  return { shows };
};

export const getShow = async id => {
  const result = await axios.get(`${api}/shows/${id}`);
  const { data } = result;
  data.image = data.image !== null ? data.image.medium : imgPlaceholder;
  data.genres = data.genres.length > 1 ? data.genres.join(", ") : data.genres;
  return data;
};
