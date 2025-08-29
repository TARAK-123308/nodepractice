const { ObjectId } = require("mongodb");
const { UserCollection } = require("../Db_Connection");

exports.getUsers = async (req, res) => {
  try {
    const users = await UserCollection().find().toArray();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserCollection().findOne({ _id: new ObjectId(id) });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      return res.status(400).json({ message: "User data is missing" });
    }
    const { insertedId } = await UserCollection().insertOne(user); 
    res.status(201).json({ message: "Success", userId: insertedId });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await UserCollection().deleteOne({ _id: id }); 
    res.json({ message: "Deleted", result });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

exports.Home = (req, res) => res.send("<h1>Home page</h1>");
exports.About = (req, res) => res.send("<h1>About page</h1>");
exports.User = (req, res) => res.send("<h1>User page</h1>");
exports.Homie = (req, res) => res.json({ name: "Tarak", roll: 634 });
