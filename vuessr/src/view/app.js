const vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const server = require('express')()
// 第 1 步：创建一个 Vue 实例
// const vue = require('vue')
// const app = new Vue({
//     template: `<div>Hello World</div>`
// })

// // 第 2 步：创建一个 renderer
// const renderer = require('vue-server-renderer').createRenderer()

// // 第 3 步：将 Vue 实例渲染为 HTML
// renderer.renderToString(app, (err, html) => {
//     if (err) {
//         throw err
//     }
//     console.log(html)
// })
const context = {
    title: 'hello',
    keywords: 'myproject',
    description: '构建一个ssr'
}
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>Hello World:{{ url }}</div>`
    })
    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        console.log(html)
    })
})
server.listen(8888)
