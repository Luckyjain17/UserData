    let express = require('express');
    let mongoose = require('mongoose');
    let app = express();
    const cors = require('cors');
    let Data = require('./models/user')
    const DB = "mongodb+srv://lucky:lucky123@cluster0.nugzyva.mongodb.net/Users?retryWrites=true&w=majority";
    mongoose.connect(DB).then(()=>{
      console.log("Connected Sucessfull")
    }).catch((error)=>{
      console.log("MongoDb Connection error---->",error);
    })

    app.use(express.json());
    app.use(cors());

    app.post('/users', async (req, res) => {
      try {
        const userData = req.body;
        const newUser = await Data.create(userData);
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    app.get('/users', async (req, res) => {
      try {
        const users = await Data.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.get('/users/:userId', async (req, res) => {
      try {
        const userId = req.params.userId;
        // Use userId to fetch user data from your database
        const userData = await Data.findById(userId);
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
    

    app.listen(4000, function () {
      console.log('app listening on port 4000!');
    });