class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.client = axios.create({
      baseUrl = this.BASE_URL
    })
  }

  getFullList () {
    return this.client.get('/characters')
  }

  getOneRegister () {
    return this.client.get(`/characters/${id}`)
  }

  createOneRegister () {
    return this.client.post(`characters`, obj);
    // const { name: string, occupation: string, cartoon: boolean, weapon: string } = newCharacter;
    // this.client.post('/characters', newCharacter)
    // .then(character => {
    //   console.log('Character Created')
    //   return character
    // })
    // .catch(error => {
    //   console.log('Error while creating a new character: ', error);
    // })
  }

  updateOneRegister () {
    return this.client.put(`characters/${id}`, obj);
    // const { name: string, occupation: string, cartoon: boolean, weapon: string } = changedCharacter;
    // this.client.patch(`/characters/${id}`, changedCharacter)
    // .then(character => {
    //   console.log('Character Changed Successfully')
    //   return character
    // })
    // .catch(error => {
    //   console.log('Error while changing a character: ', error);
    // })
  }

  deleteOneRegister () {
    return this.client.delete(`characters/${id}`);
  }
}
