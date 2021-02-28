// 处理输入的颜色长度
export function handleColorCode(code){
    let size = code.length
    if(!size)
        return "000000"
    else if(size == 3)
        return `${code}${code}`
    else if(size == 2)
        return `${code}${code}${code}`
    else if(size == 1)
        return `${code}${code}${code}${code}${code}${code}`
    else {
        let endCode = code.split("").slice(size - (6 - size ), size ).join("")
        return `${code}${endCode}`
    }
}