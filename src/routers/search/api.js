import { api } from "../../utils/api";

export const search = ({ text }) => {
  return api
    .get(`/movie/search?q=${text}&apikey=0df993c66c0c636e29ecbb5344252a4a`)
    .then(function(response) {
      return response.subjects;
    })
    .catch(data => {
      console.log(data);
    });
};
