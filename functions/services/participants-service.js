import faunadb from 'faunadb'
const q = faunadb.query

export class ParticipantsService {
  constructor(data) {
    this.client = data.client
  }

  async getParticipants() {
    return new Promise((resolve, reject) => {
      this.client
        .query(q.Paginate(q.Match(q.Ref('indexes/participants'))))
        .then((response) => {
          const productRefs = response.data
          const getAllProductDataQuery = q.Map(productRefs, q.Lambda(['ref'], q.Get(q.Var('ref'))))

          this.client.query(getAllProductDataQuery).then((ret) => {
            resolve(ret)
          })
        })
        .catch((error) => {
          console.log('error', error)

          reject(error)
        })
    })
  }

  async createParticipant(data) {
    return new Promise((resolve, reject) => {

      const createP = this.client.query(
        q.Create(q.Collection('participants'), { data: JSON.parse(data) }),
      );

      createP
      .then(function(response) {

        resolve(response);
      })
      .catch((error) => {
        console.log('error', error)

        reject(error)
      })
    })
  }
}
