// types/common/user.d.ts
export interface BaseUser {
    username: string;
    did: string;
    avatar: string;
}

// Example for Backend:
// export interface IUserModel extends BaseUser, mongoose.Document {
//     password: string;
//     key: {
//         pub: string,
//         priv: {
//             iv: string,
//             content: string
//         };
//     };
// }
