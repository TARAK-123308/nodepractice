const parameterBYIndex = (req, res) => {
    console.log(req.url, req.method);

    const { index, name } = req.params;

    res.send({ message: "success", index, name });
};

const queryparameterBYIndex = (req, res) => {
    console.log(req.url, req.method);

    console.log(req.query);
    res.send(req.query);
};

module.exports = { parameterBYIndex, queryparameterBYIndex };
