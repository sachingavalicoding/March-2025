import Student from "../../models/student.model.js";

export const addUser = (req , res ) => {
    const {username,email,password} = req.body;
    console.log("username" , username , "password" , password);
    const user = new Student({
        username,
        email,
        password
    });
    user.save().then(() => {
        res.send({status : 1 , message : "User added"});
    }).catch((err) => {
        res.send({status:0 , message : "Error to add user ", err});
    })
}
export const getUser = (req , res ) => {
    
}
export const getUsers = async (req , res ) => {
   try {
    const users = await Student.find();
    res.send({status:1 , message : "Users List", data:users});
   } catch (error) {
    res.send({status:0 , message: `Error in getting users ${error}`});
   }
}