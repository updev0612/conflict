const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)
=======
  if (req.url === '/user-agent') return respondUserAgent(req, res)
>>>>>>> 33e41571c2ceeb0e61b456a7678753a57fc6dd91
=======
  if (req.url === '/user-agent') return respondUserAgent(req, res)
>>>>>>> 33e41571c2ceeb0e61b456a7678753a57fc6dd91

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

<<<<<<< HEAD
<<<<<<< HEAD
function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
  res.end(JSON.stringify({ b64: Buffer.from(phrase).toString('base64') }))
=======
function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
  res.end(JSON.stringify({ ua }))
>>>>>>> 33e41571c2ceeb0e61b456a7678753a57fc6dd91
=======
function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
  res.end(JSON.stringify({ ua }))
>>>>>>> 33e41571c2ceeb0e61b456a7678753a57fc6dd91
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
