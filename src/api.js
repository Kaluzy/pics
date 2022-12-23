import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID apJRhFaRfcXbm_6k4QlX8e9nZm5J5yWlMYXzfgCbZMg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
