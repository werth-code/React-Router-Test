import axios from 'axios'

const getUrl = "http://localhost:8091/search/"
const postUrl = "http://localhost:8091/search/type/"
class PageController {
   
    getAPI(string) {
        return axios.get(getUrl + string)
    }

    getSingleAPI(string) {
        return axios.get(postUrl + string)
    }

    postAPI(string, params) {
        return axios.post(postUrl + string, params)
    }
}

export default new PageController();