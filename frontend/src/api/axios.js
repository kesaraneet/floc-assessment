import axios from "axios";

export default axios.create({
  baseURL: `https://floc-assessment.herokuapp.com`,
});
