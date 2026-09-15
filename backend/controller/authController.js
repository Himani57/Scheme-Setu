import authModel from '../models/authModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signupUser = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password } = req.body;

        const userAlreadyExit = await authModel.findOne({ email });

        if (userAlreadyExit) {
            return res.status(409).json({
                message: "User already exist with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await authModel.create({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET_KEY
        );

        res.cookie("token",token);

        res.status(201).json({
            message: "User registered successfully",
            token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req,res) =>{
    try{
        const{email,password} = req.body;

        const userExist = await authModel.findOne({email});
        if(!userExist){
            return res.status(404).json({
                 message: "User not found" 
            });
        }

        const checkPassword = await bcrypt.compare(password , userExist.password);
        if(!checkPassword){
            return res.status(401).json({
                message : "Something went wrong"
            })
        }

        const token = jwt.sign({
            id: userExist._id
        },process.env.JWT_SECRET_KEY);

        res.cookie("token",token);

        res.status(200).json({
            message : "Logged in successfully"
        })

    }catch (error) {
        res.status(500).json({
             message: error.message
        });
    }
}


export {signupUser , loginUser};