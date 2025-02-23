import { PrismaClient } from "@prisma/client"

export default new PrismaClient();

// why are we doing this export here 
//so that we can use this primaClient 
// from the nodemods/prisma/client 
// to anywhere inside the app