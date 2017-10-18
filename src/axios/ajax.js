import axios from 'axios'
import {message} from 'antd'
import {globalConfig} from '../GlobalConfig'

export const get = ({url, msg='接口异常', headers}) => {
    axios.get(url, headers)
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            message.warn(msg)
        })
}



export const post = (url_interface, request_data) => {

    debugger
    const url = `${globalConfig.api.baseURL}/${url_interface}`

    axios({
        url: url,
        method: 'post',
        data: request_data,
        headers: {
            'content-type': 'multipart/form-data'
        }

    }).then((res) => {
        alert(1)
        return res.data
    }).catch((err) => {
        return err
    })

}