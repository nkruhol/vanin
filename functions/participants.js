import { ParticipantsService } from './services/participants-service.js'
import { client, headers } from '../config.js'

const service = new ParticipantsService({ client })

exports.handler = async (event, context) => {
  console.log('Function `products` invoked')

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' }
  }

  try {
    const products = await service.getParticipants()
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.log('error', error)

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify(error),
    }
  }
}
