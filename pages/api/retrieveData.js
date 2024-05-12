import user from "../../Model/User";
import connectDB from "../../lib/connectDB"

export default async function handler(req, res) {
    await connectDB()


    user.find()
        .exec()
        .then((users) => {
    
        res.status(200).json(users)
    }).catch((err) => {
        // Handle error if any
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal server error" });
    });


}