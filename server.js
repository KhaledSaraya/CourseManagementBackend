require('dotenv').config();

const express = require('express');
const app = express();

require('./config/db');

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Server is running correctly');
})

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
});

