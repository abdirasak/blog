const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
exports.currUser = async (req,res) => {
   
    res.json({msg: 'current user'})
}

exports.register = async (req,res) => {
    const {name, email, password} = req.body

    //check if all fields has been added
    if(!name || !email || !password){
        res.status(400)
        throw new Error('please add alll fields')
    }

    //check if user exists 
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new console.error('user already exists');
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create new user 
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    //send back the user details with the token
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
   
}


exports.login = async (req,res) => {
    const {email, password} = req.body

    //check for email
    const user = await User.findOne({email})
    // //check for password to match with hashed password
    const matchedpass = await bcrypt.compare(password, user.password)
    console.log(email, password)
    // if correct username and password found, send back user deatils with token
    if(user && matchedpass){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
  
}

//generate token
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
}