/* services/user.service.js */
const { saveData } = require("../repositories/user.repository");

const getName = user => user ? user.name : null;

const saveName = user => {
    if (user) {
        const isSaved = saveData(user);
        return isSaved;
    } else {
        return null;
    }
}

module.exports = { getName, saveName };