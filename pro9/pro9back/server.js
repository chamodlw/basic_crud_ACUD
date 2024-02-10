const express =require('express');
const app =express();
const cors =require('cors');
const port = 3010;
const host ='localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://wlakshan888:9090ad90908@cluster0.d7tbpew.mongodb.net/?retryWrites=true&w=majority';

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('Connect to MongoDB');
    }
    catch(error){
        console.log('MongoDB Error' , error)
    }
}
//
connect();

const server = app.listen(port, host,() =>{
    console.log('Node server is listening to ${server.address().port}')
});

app.use('/api',router);