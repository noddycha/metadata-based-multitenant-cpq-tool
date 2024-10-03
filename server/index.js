import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()
const port = 4000

app.use(cors())

app.get('/ui-configuration', (req, res) => {
  const tenantId = req.query.tenantId || 1001
  res.header('Content-Type', 'application/json')
  res.sendFile(path.resolve(`./data/ui-configuration-${tenantId}.json`))
})

app.get('/ui-data', (req, res) => {
  const tenantId = req.query.tenantId || 1001
  res.header('Content-Type', 'application/json')
  res.sendFile(path.resolve(`./data/ui-data-${tenantId}.json`))
})

app.post('/ui-data', (req, res) => {
  res.status(201)
  res.send('Success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
