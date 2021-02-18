import axios from 'axios'

const url = "http://localhost:8090/search/"
class PageController {
   
    getAPI(string) {
        return axios.get(url + string)
    }
}

export default new PageController();