const express = require("express");
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();
app.get('/', (req, res) => res.json({ msg: "Welcome to Contact Keeper" }));

//Init Middleware
app.use(express.json({ extended: false }))

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));