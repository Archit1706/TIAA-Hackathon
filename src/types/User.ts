type User = {
    id: string;
    name: string;
    email: string;
    image?: string;
    uid?: string;
    createdAt?: Date;
    bookmarkedProducts?: string[];
    purchasedProducts?: string[];
    soldProducts?: string[];
};

export default User;
