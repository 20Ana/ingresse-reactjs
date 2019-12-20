import axios from "axios";

const api = "http://api.tvmaze.com";
const imgPlaceholder = "https://via.placeholder.com/600";
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
