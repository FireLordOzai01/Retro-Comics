const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuredBooksSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    digitalId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    issueNumber: Number,
    variantDescription: String,
    description: String,
    modified: String,
    isbn: String,
    upc: String,
    diamondCode: String,
    ean: String,
    issn: String,
    format: String,
    pageCount: Number,
    textObjects: [
        {
            type: {
                type: { type: String}
            },
            language: String,
            text: String
        }
    ],
    resourceURI: String,
    urls: [
        {
            type: {
                type: { type: String}
            },
            url: String
        }
    ],
    series: {
        resourceURI: String,
        name: String
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
        {
            type: {
                type: { type: String}
            },
            date: String
        }
    ],
    prices: [
        {
            type: {
                type: { type: String}
            },
            price: Number
        }
    ],
    thumbnail: {
        path: String,
        extension: String
    },
    images: [
        {
            path: String,
            extension: String
        }
    ],
    creators: {
        available: Number,
        collectionURI: String,
        items: [
            {
                resourceURI: String,
                name: String,
                role: String
            }
        ],
        returned: Number,
    },
    characters: {
        available: Number,
        collectionURI: String,
        items: [
            {
                resourceURI: String,
                name: String
            }
        ],
        returned: Number
    },
    stories: {
        available: Number,
        collectionURI: String,
        items: [
            {
                resourceURI: String,
                name: String,
                type: {
                    type: { type: String}
                }
            }
        ],
        returned: Number
    },
    events: {
        available: Number,
        collectionURI: String,
        items: [],
        returned: Number
    }
});

const FeaturedBooks = mongoose.model('FeaturedBooks', featuredBooksSchema);

module.exports = FeaturedBooks