const { ObjectId } = require("mongodb");
const { UserCollection } = require("../Db_Connection");
const bcrypt = require("bcrypt");

const saltRounds = 10; // standard cost factor

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await UserCollection().find().toArray();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Get user by ID
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

// Register new user (with bcrypt)
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, ...rest } = req.body;

    if (!password) {
      return res.status(400).json({ message: "User password is missing" });
    }
    if (!email) {
      return res.status(400).json({ message: "User email is missing" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user object
    const user = {
      name,
      email,
      password: hashedPassword, // store hashed password
      ...rest,
    };

    const { insertedId } = await UserCollection().insertOne(user);
    res.status(201).json({ message: "Success", userId: insertedId });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Failed to register user" });
  }
};

// Delete user
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

// Extra routes
exports.Home = (req, res) => res.send("<h1>Home page</h1>");
exports.About = (req, res) => res.send("<h1>About page</h1>");
exports.User = (req, res) => res.send("<h1>User page</h1>");
exports.Homie = (req, res) => res.json({ name: "Tarak", roll: 634 });
