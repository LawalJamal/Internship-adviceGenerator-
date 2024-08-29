import http from "../utils/http";

const getRandomAdvice = () => {
    return http.get(`/advice`)
}

export { getRandomAdvice};