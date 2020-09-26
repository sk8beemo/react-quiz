import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-93e65.firebaseio.com/'
})