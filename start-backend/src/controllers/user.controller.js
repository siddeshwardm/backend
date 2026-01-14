import {User} from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {username, password, email} = req.body;

        if(!username || !password || !email) {
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({$or: [{username}, {email}]});
        if (existingUser) {
            return res.status(400).json({message: "Username or email already exists"});
        }

        //crete new user 

        const newUser = await User.create({username, password, email,loggedIn:false});
         

        res.status(201).json({message: "User registered successfully", userId: newUser._id,email:newUser.email,username:newUser.username });
    } catch (error) {
        res.status(500).json({message: "Internal server error"});


    }



};

export {
    registerUser

}