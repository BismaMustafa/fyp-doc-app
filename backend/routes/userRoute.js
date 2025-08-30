import express from 'express'
import { registerUser,loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
const userRouter = express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
//route for users profile
userRouter.get('/get-profile',authUser,getProfile)
//route for update profile 
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
// route for booking appointment 
userRouter.post('/book-appointment',authUser,bookAppointment)
// route for list appointment
userRouter.get('/appointments',authUser,listAppointment)
// route for cancel appointment
userRouter.post('/cancel-appointment',authUser,cancelAppointment)

// userRouter.post("/create-payment-intent", createPaymentIntent);
// userRouter.post("/webhook", express.raw({ type: "application/json" }), stripeWebhook);


export default userRouter