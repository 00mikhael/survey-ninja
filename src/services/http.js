import axios from 'axios'

// let serverUrl = 'https://survey-ninja-server.herokuapp.com'

let serverUrl = 'http://localhost:3002'

const http = () => {
    return axios.create({
        baseURL: serverUrl
    })
}

export default http
