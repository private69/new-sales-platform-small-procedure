// 发送请求
import request from '@/plugins/axios'
export function get(data){
    // get 方法传参错误
    return request({
        // url: `/checkGet.do`,
        url: `/localhost`,
        methods: "GET",
        data
    })
};

export function post(data){
    return request({
        // url: `/checkPost.do`,
        url: `/localhost`,
        methods: "POST",
        data
    })
};