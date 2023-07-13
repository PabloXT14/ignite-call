import axios from 'axios'

export const api = axios.create({
  baseURL: '/api', // Como o front-end e back-end estão no mesmo host base (ex: http://localhost:3000) só precisamos indicar qual a rota das nossas API no Next
})
