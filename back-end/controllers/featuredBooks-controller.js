const { Featured } = require('./../data/featuredBooks');
const FeaturedBooks = require('./../models/featuredBooks-schema');

const seedDBFeatured = (req, res) => {
    FeaturedBooks.create(Featured)
        .then(books => res.status(200).send({ success:true, data: books}))
        .catch(err => res.status(500).send({ success: false, error: err.message}))
}

const getAllFeatured = (req, res) => {
    FeaturedBooks.find()
        .exec((err, books) => {
            if(err) { res.status(500).send({ success: false, message: "There was an error with our databse.", error: err.message});}
            else if (books.length === 0) { res.status(404).send({ success: false, messasge: "No books found"});}
            else { res.status(200).send({ success: true, data: books});}
        })
}

const deleteFeatured = (req, res) => {
    FeaturedBooks.findOneAndDelete({"id" : req.params.id}, (err, book) => {
        if(err) { res.status(500).send({ success: false, message: "There was an error with our database.", error: err.message});}
        else { getAllFeatured(req, res) }
    })
}

const addFeatured = (req, res) => {
    let book = {...req.body};
    FeaturedBooks.create(book, (err, book) => {
        if(err) { res.status(500).send({ success: false, message: "There was an error with our database.", error: err.message});}
        else { getAllFeatured(req, res) }
    })
}

module.exports = {
    seedDBFeatured,
    getAllFeatured,
    deleteFeatured,
    addFeatured
}