// database connection
const mongoose = require("mongoose");
const url = process.env.databaseurl || "mongodb://localhost/metronome"
mongoose.connect(url, {useNewUrlParser:true, useCreateIndex: true});
// error reporting
mongoose.set('debug', true);

