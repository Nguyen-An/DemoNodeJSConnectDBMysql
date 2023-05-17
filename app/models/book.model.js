const db = require('../common/connect')

const Book = function (book) {
    this.videoID = book.videoID;
    this.videoName = book.videoName;
    this.videoImage = book.videoImage;
    this.videoLink = book.videoLink;
    this.accountID = book.accountID;
    this.description = book.description;
}

Book.get_all = function (result) {
    db.query("SELECT * FROM video", function (err, video) {
        if (err) {
            result(video)
            return;
        }
        result(video)
    })
}

Book.getById = function (id, result) { 
    db.query(`SELECT * FROM video WHERE videoID = ?`,id, function (err, video) {
        if (err || video.length == 0) {
            result(null);
        }else{
            result(video[0])
        }
    })
}

Book.create = function (data, result) { 
    db.query(`INSERT INTO video SET ?`, data, function (err, video) {
        console.log(video);
        if (err) {
            result(null);
        }else{
            result({videoId: video.insertId, ...data});
        }
    })
}

Book.remove = function (id, result) { 
    db.query("DELETE FROM video WHERE videoID = ?", id, function (err, video) {
        if (err) {
            result(null);
        }else{
            result("Xoa thanh cong video co id la: " + id);
        }
    })
}

Book.update = function (data, result) { 
    result(data)
}

module.exports = Book;