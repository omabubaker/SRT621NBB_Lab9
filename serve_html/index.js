const port = 3000, 
    controller = require("./controllers/controller")
    express = require("express")
    app = express();
app.set("view engine", "ejs");
app.get("/home", controller.sendReqParam)
app.get("/images/davinci", controller.jpg1)
app.get("/images/great", controller.jpg2)
app.get("/images/tale", controller.jpg3)
app.get("/images/1", controller.sendReqParam1)
app.get("/images/2", controller.sendReqParam2)
app.get("/images/3", controller.sendReqParam3)
.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`)

})

