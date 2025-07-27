import axios from "axios";
const baseUrl = "http://localhost:3001/persons";
//get all persons
const getAll = () => {
    return axios.get(baseUrl);
}
//create new person 
const create = newObject => {
  return axios.post(baseUrl, newObject)
}

export default {
    getAll,
    create
}