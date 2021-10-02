const getPromoCodes = `
query($server: String!){
    promosByServer(server: $server){
      _id
      code
      server
      expired
    }
}`;

export default getPromoCodes;