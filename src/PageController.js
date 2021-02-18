import axios from 'axios'

const getUrl = "http://localhost:8090/search/"
const postUrl = "http://localhost:8090/search/type/"
class PageController {
   
    getAPI(string) {
        return axios.get(getUrl + string)
    }

    postAPI(string, params) {
        return axios.post(postUrl + string, params)
    }
}

export default new PageController();