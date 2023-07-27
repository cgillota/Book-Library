const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, 
}).catch((err) => {
    console.error(err);
})
;
// added lines 8-11 to fix deprecation warnings
module.exports = mongoose.connection;
