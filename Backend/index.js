const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

app.use(
    cors({
        origin : '*',
    })
)
const mongodbURI  = process.env.MONGODB_URI;
mongoose.connect(mongodbURI , {
    maxPoolSize : 10,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection error'));
db.once('open', () => {
    console.log('Connected to database successfully');
})
// const demo = ()=>{
//     console.log('Demo function');
// }
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
//  app.get('/', function(req, res){
//      res.send("Hello World");
//  })
app. listen(4000 , '0.0.0.0', ()=> {
    console.log("server started at port 4000");
})