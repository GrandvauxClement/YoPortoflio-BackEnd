const Message = require('../models/message');

exports.createMessage = (req, res, next) => {
    const messageObject = JSON.parse(req.body.project);
    const message = new Message({
        ...messageObject
    });
    message.save()
        .then(() => res.status(201).json({message: 'Message créé correctement ! :)'}))
        .catch(error => res.status(400).json({error}));
};

exports.getOneMessage = (req, res, next) => {
    Message.findOne({
        _id: req.params._id
    }).then(
        (message)=> {
            res.status(200).json(message);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};

exports.getAllMessage = (req, res, next) => {
    Message.find().then(
        (message) => {
            res.status(200).json(message);
        }
    ).catch(
        (error) => {
            res.status(500).json({error});
        }
    );
};