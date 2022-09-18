const app = require('./index')
require('dotenv').config()

app.listen(process.env.SERVER_PORT || 3000, () => console.log('Server started'))