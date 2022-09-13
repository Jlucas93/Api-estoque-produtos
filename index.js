const express = require('express');
const app = express();

//Routes
const homeRouter = require('./src/routes/home')


//Starting the server
const port = 3000
app.listen(port, () => console.log('Server started on port ' + port))

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js 


app.use(homeRouter)

