require('dotenv').config();

const express = require('express');
const sequelize = require('./config/db');
const AuthRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth',AuthRoutes);


app.get('/',(req,res)=>{
    res.send('Server is running correctly');
})

sequelize.authenticate().then(()=>{
    console.log('Connected Via Sequelize');

}).catch((err)=> {

    console.error('Error: ',err);

});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
});

