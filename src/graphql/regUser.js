const regUser = `
query regUser{
    regUser{
        _id
        login
        reg
        roles
        gameInfo{
            ownerId
            gameNickName
            adventureLvl
            mainChar
        }
        email
        server
        ua
    }
}
`;

export default regUser;