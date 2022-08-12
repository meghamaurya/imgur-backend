const mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    username: String,
    image: String,
    Detail: String,
    // data: Buffer,
    contentType: String,
}, {
    timeStamps: true
});
imageSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = mongoose.model("Image", imageSchema);





/* to use multer
 const mongoose = require('mongoose');
    var imageSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        image: {
            data: Buffer,
            contentType: String
        }
    }, {
        timeStamps: true
    });
    imageSchema.method("toJSON", function () {
        const { __v, _id, object } = this.toObject();
        object.id = _id;
        return object;
    })

    module.export = ImageModel = mongoose.model("Image", imageSchema);
   */