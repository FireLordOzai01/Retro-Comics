const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const usersSchema = new Schema({
    fName: {
        type: String,
        required: true,
        trim: true
    },
    lName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    purchaseHistory: []
    
})

usersSchema.pre('save', function(next) {
    var user = this;
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {throw new Error(err);}
        bcrypt.hash(user.password,salt, function(err, hash) {
            if (err) {throw new Error(err)};
            user.password = hash;
            next();
        });
    });
});

usersSchema.methods.verifyPassword = function(password) {
    var user = this;
    return bcrypt.compareSync(password, user.password);
}

const Users = mongoose.model('Users', usersSchema);

module.exports = Users