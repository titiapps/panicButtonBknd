const app = require("./app/app");
require("dotenv").config();
const port = 3200;



app.listen(port, () => {
    console.log("Server up @" + process.env.PORT);
  });
  

