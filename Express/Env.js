// const port = isNaN(process.env.port) ? 3000: parseInt(process.env.port);


//Zod 
import {z} from "zod";
const ageSchema = z.number().min(18).max(100).int();
const userAge = 20;

// const parseuserAge = ageSchema.parse(userAge);
// console.log(parseuserAge)

// const parseuserAge = ageSchema.parse(userAge);
// const {data ,error ,success } = ageSchema.safeParse(userAge)
// console.log(success)


const portSchema = z.coerce.number().min(1).max(54625).default(3000)

export const port = portSchema.parse(process.env.port);