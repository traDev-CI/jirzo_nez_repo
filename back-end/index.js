const mongoose = require('mongoose');
const app = require("./App")
const { API_VERSION, IP_SERVER, PORT_DB, PORT } = require('./config');

mongoose.set("useFindAndModify", false);

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/blogphotography`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conections to the database has been successful");
        app.listen(PORT, () => {
            console.log("##########################################");
            console.log("#############  API REST  #################");
            console.log("##########################################");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}/`);
        })
    }
})