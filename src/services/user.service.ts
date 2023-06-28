import userRepository from "../repositories/user.repository";
import { User } from 'protocols/User'

export async function getRandomUser(): Promise<User> {
    try {
        const totalUsers: number = await userRepository.getTotalUsers();
        const randomId: number = Math.floor(Math.random() * totalUsers) + 1;
        const user = await userRepository.getUserById(randomId);
        console.log(user);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}