import express, {Request, Response} from "express"
import { Channel, Client, IntentsBitField } from 'discord.js';

import * as dotenv from "dotenv"
dotenv.config({
    path: __dirname + '/.env'
})

const app = express()
const botToken = process.env.DISCORD_TOKEN;

app.listen(4000, ()=>{
    
    console.log("Server running on port 4000")
})

app.use(express.json())

app.use(express.urlencoded({
    extended: false
}))

app.get("/discord", async (req:Request,res:Response)=>{
    const { alert } = req.query;
    
    const client = new Client({
        intents: [IntentsBitField.Flags.GuildMessages]
    });

    await client.login(botToken)

    client.on("ready", async ()=>{
        
    })



})