import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../data/mock"
import MainData from "../models/mainDataModel"


/**
 * Function wich make request to an API or a mock
 * @param {String} url API adress
 * @param {Object} options Headers, cors...
 * @param {String} method Request Method (GET, POST...)
 * @returns {Promise|Object} API or Mock Response
 */
export async function query(url, options, method, mock = false) {

    if (mock) {
        const parsedUrl = url.substring(27).split('/')
        const id = parsedUrl[0]
        const page = parsedUrl[1]

        switch (page) {
            case undefined:
                return USER_MAIN_DATA.find(obj => obj.id === +id)
            case 'activity':
                return USER_ACTIVITY.find(obj => obj.userId === +id)
            case 'average-sessions':
                return USER_AVERAGE_SESSIONS.find(obj => obj.userId === +id)
            case 'performance':
                return USER_PERFORMANCE.find(obj => obj.userId === +id)
        }
    }



    const res = await fetch(url, {
        method: method || 'GET',
        ...options
    })
    const data = await res.json()

    if (res.ok) {
        return data
    } else {
        throw `Une erreur est survenue: ${res.status}/${data}`
    }



}