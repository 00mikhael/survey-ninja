import axios from 'axios'

let serverUrl = 'https://survey-ninja-server.herokuapp.com'

const http = () => {
    return axios.create({
        baseURL: serverUrl
    })
}

export default http
