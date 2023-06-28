import { db } from "../database/database.connection";
import { QueryResult } from "pg";
import { User } from "protocols/User";

async function getTotalUsers(): Promise<number> {
    const total: QueryResult = await db.query(`SELECT COUNT(*) FROM people;`);
    return total.rows[0].count;
}

async function getUserById(id: number): Promise<User> {
    const result: QueryResult = await db.query<User>(`SELECT * FROM people WHERE id = ${id};`);
    return result.rows[0];
}

const userRepository = {
    getTotalUsers,
    getUserById
}

export default userRepository;