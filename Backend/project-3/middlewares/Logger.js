exports.Logger = (req, res, next) => {
    let result = `${new Date().toDateString()}`;
    console.log(result);
    next();
};
