const express = require('express')
const path = require('path')
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(morgan('dev'))

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
  )
  next()
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const getConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'rnDB',
  })
}

const executeQuery = (res, query, queryArr) => {
  getConnection().query(query, queryArr, (err, rows, field) => {
    if (err) {
      console.log('ERROR: ', err)
      // res.statusMessage = err
      res.status(500).send(err)
      // res.status(500).end()
    } else {
      res.status(200).send(rows)
    }
  })
}

// --------- GET ---------

// --------- POST ---------

app.post('/post_user', (req, res) => {
  const { user_id, user_full_name } = req.body

  const query =
    'INSERT INTO users (user_id, user_full_name) ' +
    'VALUES (?, ?)'

  const queryArr = [user_id, user_full_name]

  executeQuery(res, query, queryArr)
})

// --------- DELETE ---------

// --------- UPDATE ---------

app.listen(port, () => console.log(`Listening on port ${port}`))
