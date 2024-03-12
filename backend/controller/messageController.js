const Message = require('../models/message');

exports.createMessage = async (req, res) => {
    try {
        const { sender, text } = req.body;
        const message = await Message.create({ sender, text });
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate('sender', 'username avatar');
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
