export interface IUserInfo {
    id: string;
    firstName: string;
    lastName: string;
}

export const fetchUser = async () => new Promise<IUserInfo>(resolve => {
    setTimeout(() => {
        resolve({
            id: 'user-123',
            firstName: 'John',
            lastName: 'Smith'
        });
    }, 5000);
});
