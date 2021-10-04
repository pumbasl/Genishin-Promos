const regUser = `
query regUser{
    regUser{
        _id
        login
        reg
        roles
        tokenVersion
        email
        server
        ua
    }
}
`;

export default regUser;