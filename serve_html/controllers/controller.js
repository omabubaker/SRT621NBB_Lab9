exports.sendReqParam = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    res.render("home");
}
exports.sendReqParam1 = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    res.render("../public/images/1");
}
exports.sendReqParam2 = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    res.render("../public/images/2");
}

exports.sendReqParam3 = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    res.render("../public/images/3");
}


exports.jpg1 = (req, res) => {
    res.sendFile(`./public/images/davinci.jpg`, {root:"./"})
}

exports.jpg2 = (req, res) => {
    res.sendFile(`./public/images/great.jpg`, {root:"./"})
}

exports.jpg3 = (req, res) => {
    res.sendFile(`./public/images/tale.jpg`, {root:"./"})
}


