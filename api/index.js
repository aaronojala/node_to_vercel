const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/api', (req,res) => {
    res.json({
        message: 'Hello from KawhiBaby'
    })
})

module.exports = app