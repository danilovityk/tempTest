import user from "../../Model/User";
import connectDB from "../lib/connectDB"


export default async function handler(req, res) {
    await connectDB()
    
    const {firstName, lastName, age, telegram, whatsApp} = req.body;
    const person = new user({
        firstName: firstName,
        lastName: lastName,
        age: age,
        telegram: telegram,
        whatsApp: whatsApp,
    })
    try {
        await person.save();
        console.log("inside api", firstName, lastName, age, telegram, whatsApp);
        // Redirecting to the main page
        res.writeHead(302, {
            'Location': '/' // Put your main page URL here
        });
        res.end();
    } catch (error) {
        // Handle error if save fails
        console.error("Error saving person:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
  }
