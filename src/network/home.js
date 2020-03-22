// import {request} from "../plugins/axios"
import {request} from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/mutidata'
  })


}
