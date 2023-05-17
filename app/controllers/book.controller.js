const Book = require('../models/book.model')

exports.get_list = function (req, res) {
    Book.get_all(function (data) {
        res.send({result: data})
    })

}

exports.detail = function (req, res) {
    Book.getById(req.params.id, function (response) {
        res.send({result: response})
    })
}

exports.add_book = function (req, res) { 
    let data = req.body;
        
    Book.create(data, function (response) {
        res.send({result: response})
    });
}

exports.remove_book = function (req, res) { 
    let id = req.params.id;
    Book.remove(id, function (response) { 
        res.send({result: response})
    })
}

exports.update_book = function (req, res) { 
    let data = req.body;

    Book.update(data, function (response) { 
        res.send({result: response})
    })
}











