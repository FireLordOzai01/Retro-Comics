const { Data } = require('./../data/users');
const Users = require('./../models/users-schema');

const seedDBUsers = (req, res) => {
    Users.create(Data)
        .then(users => res.status(200).send({ success:true, data: users}))
        .catch(err => res.status(500).send({ success: false, error: err.message}))
}

const getAllUsers = (req, res) => {
    Users.find()
        .exec((err, users) => {
            if(err) { res.status(500).send({ success: false, message: "There was an error with our databse.", error: err.message});}
            else if (users.length === 0) { res.status(404).send({ success: false, messasge: "No users found"});}
            else { res.status(200).send({ success: true, data: users});}
        })  
}

const login = (req, res) => {
    console.log('route hit');
    const{ username, password } = req.body;
    Users.findOne({ username }, function(err, user) {
            if(err) { res.status(500).send({ success: false, message: "There was an error with our databse.", error: err.message});}
            else if(!user) {res.status(404).send({ success: false, message: "User not found"});}
            else {
                if(!user.verifyPassword(password)){
                    res.status(401).send({ success: false, message: "Unauthorized"});
                } else {
                    res.status(200).send({ success: true, data: user});
                }
            }
        });
}

const getUserById = (req, res) => {
    Users.findById(req.params.id)
        .exec((err, user) => {
            if(err) { res.status(500).send({ success: false, message: "There was an error with our database.", error: err.message});}
            else if (!user) { res.status(404).send({ success: false, message: "User not found"});}
            else { res.status(200).send({ success: true, data: user});}
        })
}

const createUser = (req, res) => {
    const user = {...req.body};
    Users.create(user)
        .then(user => res.status(200).send({ success: true, data: user }))
        .catch(err => res.status(500).send({ success: false, message: "There was an error with our database.", error: err.message}))
}

const updateUser = (req, res) => {
    Users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, user) => {
        if(err) { res.status(500).send({ success: false, message: "There was an erro with our database.", error: err.message});}
        else { getAllUsers(req,res) }
    })
}

const deleteUser = (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) { res.status(500).send({ success: false, message: "There was an error with our database.", error: err.message});}
        else { getAllUsers(req, res) }
    })
}

module.exports = {
    seedDBUsers,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login
}