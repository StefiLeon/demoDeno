import { Response, Request, Context, helpers } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import db from '../db/mongodb.ts';

const usersCollection = db.collection('products');

export const getAllUsers = async(context:Context) => {
    const users = await usersCollection.find().toArray();
    context.response.body = {
        status:"success",
        payload: users
    }
}

export const getUserById = (context: Context) => {
    const { id } = helpers.getQuery(context, {mergeParams: true});
    console.log(id);
    context.response.body = id;
}

export const getQuery = ({request, response}:{request:Request, response:Response}) => {
    const query = request.url.searchParams.get('uid');
    console.log(query);
    response.body = query;
}

export const saveUser = async({request, response}: {request:Request, response:Response}) => {
    const body = await request.body();
    const values = await body.value;
    response.body = values;
}