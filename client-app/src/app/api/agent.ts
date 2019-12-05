import Axios, {AxiosResponse} from 'axios'
import { IActivity } from '../models/activity'


Axios.defaults.baseURL = 'http://localhost:5000/api'  //本agent的baseurl

const responseBody = (response: AxiosResponse) => response.data

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms)) 

// 實作CRUD
const request = {
    get: (url: string) => Axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => Axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => Axios.put(url, body).then(sleep(1000)).then(responseBody),
    del:　(url: string) => Axios.delete(url).then(sleep(1000)).then(responseBody)
}

// 用來獲取 activities api的物件
const Activities = {
    list: (): Promise<IActivity[]> => request.get('/activities'),
    details: (id: string) => request.get(`/activities/${id}`),
    create:　(activity :IActivity) => request.post('/activities', activity),
    edit:　(activity: IActivity) => request.put(`/activities/${activity.id}`, activity),   //欲編輯之id直接從activity取
    delete:　(id: string) => request.del(`/activities/${id}`)
}

export default {
    Activities
}