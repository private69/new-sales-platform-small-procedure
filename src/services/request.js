// 发送请求
import request from '@/plugins/axios'
export function get(data){
    // get 方法传参错误
    return request({
        // url: `/checkGet.do`,
        url: `http://localhost:8080/check`,
        methods: "GET",
        data
    })
};

export function post(data){
    return request({
        // url: `/checkPost.do`,
        url: `http://localhost:8080/check`,
        methods: "POST",
        data
    })
};