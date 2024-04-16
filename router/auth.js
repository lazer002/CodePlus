
let express = require('express');
const router = express.Router();
let User = require('../model/signupschema');
let News = require('../model/news');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookie = require('cookie-parser');
 const Authentication = require("../middelware/authentication")

      
router.post('/signin', async (req, res) => {
    // console.log(req.body);

    const { Email, Password } = req.body.user;
    if (!Email || !Password) {
        return res.status(422).json({ message: 'Please enter valid password and email' });
    }
    try {
        const user = await User.findOne({ Email: Email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(Password, user.Password);
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }else{
            const token = jwt.sign({ Email: user.Email }, process.env.Secret_key,{expiresIn:'1d'});
            res.cookie('token',token);
        res.cookie('user',user)
            return res.json("Success");
        }
        
} catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});
 



router.post('/signup', async(req,res) => {
    console.log(req.body);
const {Username,Email,Password,Phone_number} = req.body
if(!Username||!Email||!Password||!Phone_number){
return res.status(422).json({error:"fill all fileds"})

}
try{
 const exuser = await User.findOne({Email:Email})
 if(exuser){
     res.status(422).json({error:"already a account"})
}else{
     res.status(200).json({message:"account created"})
}

const data =  new User({Username,Email,Password,Phone_number})
 await data.save()
}
catch(err){
    console.log(err)
}
})


router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { Username, Email, Password, Phone_number } = req.body
    if (!Username || !Email || !Password || !Phone_number) {
        return res.status(422).json({ error: "fill all fileds" })

    }
    try {
        const exuser = await User.findOne({ Email: Email })
        if (exuser) {
            res.status(422).json({ error: "already a account" })
        } else {
            res.status(200).json({ message: "account created" })
        }

        const data = new User({ Username, Email, Password, Phone_number })
        await data.save()
    }
    catch (err) {
        console.log(err)
    }
})

// router.post('/signin',Authenticate, async(req, res) => {
//     const {Email,Password}=req.body;
//     if(!Email||!Password){
//     return res.status(422).json({error:"fill all fileds"})

//     }
//     try{
//      const userlogin = await User.findOne({Email:Email})
//       console.log(userlogin);
//      if(userlogin){
// const match = await bcrypt.compare(Password,userlogin.Password)

// const token=await userlogin.generateAuthtoken()
// console.log(token)

// res.cookie("jwtoken",token,{
//     expires:new Date(Date.now()+60000000),
//     httpOnly:true
// })

//     if(!match){
// res.json({error:"invalid credentials"})    }
// else{res.json({message:"signuup successfully"})}

//     }}
//     catch(err){
//     console.log(err)
// }
// })
























 


router.get("/userpanel",async (req, res) => {
    const user = await User.find({})
    console.log(req.session);
    res.json({user:user})
   
})

router.get("/contect", (req, res) => {

})




router.post("/contect", Authentication, async (req, res) => {
    console.log(req.body);
    try {
        const { Username, Email, Phone_number, subject, message } = req.body;
        if (!Username || !Email || !Phone_number || !subject || !message) {

            return res.status(422).json({ error: "fill all plz" })
        }
        const contect = await User.findOne({ Email: 'nik' })
        if (contect) {
            const newmessage = await contect.addMessage(Username, Email, Phone_number, subject, message)

            await contect.save()
            res.status(201).json("message send")
        }
    } catch (err) {
        console.log(er)
    }
})




router.post("/news", async (req, res) => {
    try {
        const { newsemail } = req.body;
        if (newsemail) {

            return res.status(422).json({ error: "already message send" })
        }
        const contect = await News.findOne({ newsemail: newsemail })
        if (contect) {
            res.status(422).json({ error: "already message send" })
        } else {
            res.status(200).json({ message: "message send" })

        }

        const Mgs = new News({ newsemail })
        const data = Mgs.save()
        if (data) {
            res.status(201).json("data registered")
        }
    }
    catch (err) {
        console.log(err)
    }
})






module.exports = router