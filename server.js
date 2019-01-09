const express = require('express')
const path = require('path')

const port = Number(process.env.PORT) || 3000
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res) =>
    res.sendFile('public/index.html', {
        root: __dirname
    })
)
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})