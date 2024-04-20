//import {toast} from 'react-toastify'
/*const User = require('../models/user')

// called user schema
const {hashPassword,comparePassword} =require('../helpers/auth')

const test =(req, res) => {
    res.json('test is working')
}

//register page
const signupuser = async (req, res) => {
    try {
        const {name,email,password}= req.body;
        //check if name was entered
        if (!name){
            return res.json({
                error: 'name is required'
            })
        }
        //check password
        if (!password || password.length<6){
            return res.json({
                error: 'Password is required and should be atleast 6 characters'
            })
        }

        //check email
        const exist =await User.findOne({email});
        if (exist){
            return res.json({
                error: 'Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name,email,password
        })
        // const userdetails= await user.save()
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//login page
const signinuser = async (req, res) => {
    try {
        const { email, password } = req.body;
       
        // Check if password is provided and has at least 6 characters
        if (!password || password.length < 6) {
            return res.json({
                error: 'Wrong Password'
            });
        }

        // Check if user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            // Email not found in the database
            return res.json({
                error: 'Email not found'
            });
        }

        // If user exists, you may want to add password comparison logic here
        // For now, let's assume it's successful

        // If user exists and password matches, send success response
        return res.json({ success: true, message: "Login Successful! Welcome back!" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports ={
    test,
    signupuser,
    signinuser
}
*/


//const { toast } = require('react-toastify');
const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
    res.json('test is working');
}
//register
const signupuser = async (req, res) => {
    try {
        const { name, email, password, repeatPassword, wardNo, panchayatOrMunicipality } = req.body;

        // Check if all fields are filled
        // Check if all fields are filled
   /* if (!name || !email || !password || !repeatPassword || !wardNo || !panchayatOrMunicipality) {
    const error = 'Please fill in all fields'; // Assign the error message to a variable
    return res.json({ error }); // Return the error message as part of the JSON response
}*/


        // Check if password matches repeat password
        /*if (password !== repeatPassword) {
            error: 'Passwords do not match'
            return res.json({ error: 'Passwords do not match' });
        }
        */
        // Check password length
        if (password.length < 6) {
            error: 'Password should be at least 6 characters long'
            return res.json({ error: 'Password should be at least 6 characters long' });
        }

        // Check if email is taken
        const exist = await User.findOne({ email });
        if (exist) {
            error: 'Email is already taken'
            return res.json({ error: 'Email is already taken' });
        }

        // Create user
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            repeatPassword,
            wardNo,
            panchayatOrMunicipality
        });
        
        return res.json({ message: 'Registration is successful', user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

//login page
/*const signinuser = async (req, res) => {
    try {
        const {name, email, password } = req.body;
       
        // Check if user with the provided email exists
        const t_user = await User.findOne({ email });
        if (!t_user) {
            // Email not found in the database
            return res.status(404).json({ error: 'Email not found' });
        }

        // Check if the provided password matches the hashed password stored in the database
        const isPasswordMatch = await comparePassword(password, t_user.password);
        if (!isPasswordMatch) {
            // Password does not match
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // If user exists and password matches, generate and send a token as a response
        const token = generateToken(t_user); // Example function to generate JWT token
        return res.status(200).json({ token }); // Assuming you're sending a JWT token
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}*/


// Import the necessary modules
const { generateToken } = require('../helpers/auth'); // Assuming generateToken is defined in auth helper

// Define the signinuser controller function
const signinuser = async (req, res) => {
    try {
        const { email, password } = req.body;
       
        // Check if user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            // Email not found in the database
            return res.status(404).json({ error: 'Email not found' });
        }

        // Check if the provided password matches the hashed password stored in the database
        const isPasswordMatch = await comparePassword(password, user.password);
        if (!isPasswordMatch) {
            // Password does not match
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // If user exists and password matches, generate and send a token as a response
        const token = generateToken(user); // Call the generateToken function
        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    signinuser
};


module.exports = {
    test,
    signupuser,
    signinuser
};
