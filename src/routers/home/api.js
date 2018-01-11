import { api } from "../../utils/api";

export const getInTheaters = () => {
  return api
    .get("/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a")
    .then(function(response) {
      return response;
    })
    .catch(data => {
      console.log(data);
    });
};
