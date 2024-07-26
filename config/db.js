const mongoose = require("mongoose");

async function Mongoconnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
}

// export default Mongoconnect;
module.exports = Mongoconnect;
