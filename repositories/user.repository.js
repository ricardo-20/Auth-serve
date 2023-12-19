/* repositories/user.repository.js */

const saveData = data => {
  if (data) {
    // code for saving data to the DB
    console.log(`${data} is saved`);
    return true;
  } else {
    return false;
  }
}

module.exports = { saveData };