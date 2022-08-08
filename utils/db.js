const mongoose = require('mongoose');

module.exports = async function connection() {
    await mongoose.connect(process.env.DB_URL)
        .then(() => console.log('mongoDB connected...'))
        .catch((err) => console.log(err));
}
