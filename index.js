const express = require('express');
const PORT = process.env.PORT || 8081;
const mongoose = require('mongoose');
const authRoutes = require('./authRouter');
const verifyRouter = require('./verifyRouter');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use('/verify', verifyRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.ngfo2rc.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()