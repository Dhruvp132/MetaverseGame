import express from "express"; 
import {router} from "./routes/v1"
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors()); 

app.get("/", (req, res) => {
    res.json({
        message: "hi tehre "
    })
})

app.use("/api/v1", router)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port " + (process.env.PORT || 3000))
})