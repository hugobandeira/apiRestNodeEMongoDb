const mogoose = require('mongoose');

mogoose.connect('mongodb+srv://root:bandeira@cluster0-nzton.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    // useCreateIndex: true,
});

// mogoose.connect('mongodb://localhost/noderest', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
//
mogoose.Promise = global.Promise;
module.exports = mogoose;
