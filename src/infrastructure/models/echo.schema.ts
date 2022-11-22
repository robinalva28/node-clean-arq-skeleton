import mongoose from 'mongoose';
const { Schema } = mongoose;

const EchoSchema = new Schema({
    message:  String, // String is shorthand for {type: String}
  });