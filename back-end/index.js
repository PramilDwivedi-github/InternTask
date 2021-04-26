const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require("./config/db");
const cors = require('cors');


const app = express();

connectDB();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));



app.listen(process.env.PORT||3001,()=>{
    console.log('app is running')
})