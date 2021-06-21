// https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},

import axios from 'axios'

type TRequestData = {
    success: boolean
}

type TResponseType = {
    errorText: string
    info: string
    yourBody: TRequestData
    yourQuery: {}
}

export const requestsAPI = {
    postRequest(data: TRequestData) {
        return axios.post<TResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', data)
            .then(res => res.data)
    }
}
