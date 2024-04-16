//import {toast} from 'react-toastify'
const User = require('../models/user')

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
        const {email,password}= req.body;
       
        //check password
        if (!password || password.length<6){
            return res.json({
                error: 'Wrong Password'
            })
        }

        //check email
        const exist =await User.findOne({email});
        if (exist) {
            toast.success("Login Successful! Welcome back!");
            return res.json({ success: true });
        } else {
            // Email not found in the database
            return res.json({
                error: 'Email not found'
            });
        }
    const user = await User.create({
            email,password
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
module.exports ={
    test,
    signupuser,
    signinuser
}



