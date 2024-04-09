var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var librarySchema = new Schema({

    Name:{type:String},
    Author:{type:String},
    Genre:{type:String},
    Edition:{type:String}

});
module.exports = mongoose.model('library',librarySchema);