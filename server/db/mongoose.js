//connect to mongoAtlas
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = `mongodb+srv://ReutGol:kfCpmv6ryq3pxnrj@projects.oe9kwle.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);

mongoose.connect(URL, (err, mongoDbInstance) => {
    if (err) {
        throw Error('MongoBD connection error: ' + err)
    }
    const {host, port, name} = mongoDbInstance;
    console.log({host, port, name});
});