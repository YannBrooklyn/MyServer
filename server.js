
let express = require('express')
var bodyParser = require('body-parser')
let app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine' , 'ejs')



app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/registrer', (req, res) => {
    res.render('pages/registrer', {pages: "test"})
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/login', (req, res) => {
    res.render('pages/login')
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.post('/registrer', (req, res) => {
    console.log(req.body)
})

app.listen(9001)