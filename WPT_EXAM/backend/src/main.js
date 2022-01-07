
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const { getrecord, addrecord } = require("./user");

app.get("/users", async(req,res)=> {
    const list = await getrecord();
    res.json(list);
});

app.post("/add-user", async(req,res)=> {
    const user2 = req.body;
        await getrecord(user2);
    res.json({message:"add user via connection "});
});

app.listen(6666, () => {
    console.log(`example http://localhost:2223`);
});
