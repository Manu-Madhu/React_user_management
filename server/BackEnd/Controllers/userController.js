const user = require('../Model/user');

const home = async(req, res) => {
    const userData = await user.find();
    res.status(200).json(userData);
}
const signUp = async(req, res) => {
    res.status(200).json({ message: "Set in" });
}
const edit = async(req, res) => {
    res.status(200).json({ message: `Update User${req.params.id}` });
}
const dele = async(req, res) => {
    res.status(200).json({ message: `Delete  User${req.params.id}`  });
}
module.exports = {
    home,
    signUp,
    edit,
    dele
}