b.createUser(
    {
        user: "admin",
        pwd: "nimda",
        roles: [
            {
                role: "readWrite",
                db: "local"
            }
        ]
    }
);