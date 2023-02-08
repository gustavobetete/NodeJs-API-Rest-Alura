import mongoose from "mongoose";

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://alura:alura@alura.9v4kpxw.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;