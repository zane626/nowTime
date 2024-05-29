window.exports = {
   "now": { // 注意：键对应的是 plugin.json 中的 features.code
      mode: "list",  // 列表模式
      args: {
         // 进入插件时调用（可选）
         enter: (action, callbackSetList) => {
            const zero = (i) => i > 9 ? `${i}` : `0${i}`
            let now = new Date()
            let year = now.getFullYear()
            let month = zero(now.getMonth() + 1)
            let day = zero(now.getDate())
            let h = zero(now.getHours())
            let m = zero(now.getMinutes())
            let s = zero(now.getSeconds())
            let suffix = ['_', '-', '']
            let time = [year, month, day, h, m, s]
            let list = suffix.map(i => ({ title: time.join(i) }))
            list.unshift({ title: Math.floor(now.getTime() / 1000) })
            list.unshift({ title: now.getTime() })
            // 如果进入插件就要显示列表数据
            callbackSetList(list)
         },
         // 用户选择列表中某个条目时被调用
         select: (action, itemData, callbackSetList) => {
            window.utools.hideMainWindow(true)
            console.log(action, itemData, utools)
            utools.copyText(itemData.title+'')
         }
      }
   }
}