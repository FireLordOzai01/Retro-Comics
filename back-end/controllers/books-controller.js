const axios = require('axios');
const crypto = require('crypto');

const getBooks = (req, res) => {
    var ts = new Date().getTime();
    var hash = crypto.createHash('md5').update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY).digest('hex');
    axios.get(`https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateRange=1990-01-01%2C1991-01-01&limit=100&apikey=${process.env.PUBLIC_KEY}&ts=${ts}&hash=${hash}`)
        .then(resp => {
            res.status(200).send({ data: resp.data.data})
        })
}

module.exports = {
    getBooks
}