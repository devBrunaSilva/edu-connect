import express from 'express'

import router from './router'

const app = express()

app.use(express.json())
app.use(router)

const PORT = 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
