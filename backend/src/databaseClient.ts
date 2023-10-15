import { PrismaClient } from '../prisma/generated/client';

const dbClient = new PrismaClient();

export default dbClient;