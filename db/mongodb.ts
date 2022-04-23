import { MongoClient } from "https://deno.land/x/mongo@v0.29.4/mod.ts";

const client = new MongoClient();

await client.connect("mongodb+srv://StefiLeon:Laion160191@ecommerce.uxagm.mongodb.net/ecommerce?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1")

const db = client.database('ecommerce');

export default db;