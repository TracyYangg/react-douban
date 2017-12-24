import { api } from "../../utils/api";

export const getNowPlaying = () => {
  return api
    .get("/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a")
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(data => {
      console.log(data);
    });
};
