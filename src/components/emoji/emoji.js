
import data from './emoji-data.js'
let emojiData = {}
Object.values(data).forEach(item => {
    emojiData = { ...emojiData, ...item }
})


export function emoji(value,fontsize) {
    if (!value) return
    Object.keys(emojiData).forEach(item => {
        value = value.replace(new RegExp(item, 'g'), createIcon(item,fontsize))
    })
    return value
}

function createIcon(item,fontsize) {
    const value = emojiData[item]
    const path = './static/emoji/'
    return `<img src=${path}${value}  width="${fontsize}px" height="${fontsize}px" style="vertical-align: top">`
}
