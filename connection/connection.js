//import mongoose from 'mongoose';
import mongoose from 'mongoose';
import config from '../config/config';

const connect = () =>{
    mongoose.connect(config.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');

    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
        process.exit();
    });


}

export default connect;
