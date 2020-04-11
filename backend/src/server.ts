import app from './app'
import { port } from './config/enviroments/env'

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
