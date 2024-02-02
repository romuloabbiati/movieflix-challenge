import { User } from './user';

export type Review = {
    id: number;
    text: string;
    user: User;
};

// another way
// export type Review = {
//     id: number;
//     text: string;
//     userId: number;
//     movieId: number;
//     users: User[];
// };