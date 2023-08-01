const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    text:{
        type:String,
        require: true
    }
},{
    timestamps: true,
})

module.exports=mongoose.model('user', userSchema);