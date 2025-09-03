const {connect} = require('mongoose');

const connectDB = async ()=>{
	await connect(`${process.env.DB_URL}${process.env.DB_NAME}`) // if we didnt use connect in curley then we can call await mongoose.connect
	console.log(`DB connected..`);
}
module.exports = {connectDB}