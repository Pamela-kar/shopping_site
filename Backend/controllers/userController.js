const User = require('../models/user');
exports. create_user = async(req,res)=>{
    try{
        const {firstName, lastName, phone, imgUrl} = req.body;
        let newUser = new User({
            firstName,
            lastName,
            phone,
            imgUrl,
        });
        newUser = await newUser.save();
        // res.json(newProduct);
        res.status(201).json(newUser);
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}
