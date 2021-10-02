const getUserPromo = `
query UserPromo{
	getRegUserPromo{
    promos{
      _id
      code
      server
      expired
    }
  }
}`;

export default getUserPromo;