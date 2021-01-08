import { headers } from '../config.js'
import * as B2 from 'backblaze-b2';

const b2 = new B2({
  applicationKeyId: '0007144ccaf5d5b0000000001', // or accountId: 'accountId'
  applicationKey: 'K000d4yEGilxnRKWSk8nSCnB172f0DA' // or masterApplicationKey
});

async function GetBucket() {
  try {
    await b2.authorize(); // must authorize first
    // let response = await b2.getBucket({ bucketId: "87d1a494cc2cea1f756d051b" });

    const response = await b2.getFileInfo({
      fileId: '4_z87d1a494cc2cea1f756d051b_f105d3a00062e6bbe_d20210108_m121459_c000_v0001077_t0010'
      // ...common arguments (optional)
    });

    console.log(response.data);

    // let response1 = await b2.listFileNames({
    //     bucketId: '87d1a494cc2cea1f756d051b',
    //     // startFileName: '',
    //     // maxFileCount: 100,
    //     // delimiter: '',
    //     // prefix: ''
    //     // ...common arguments (optional)
    // })

    // console.log(response1.data);
//
    // const response = await b2.listBuckets();

    return response.data;
  } catch (err) {
    console.log('Error getting bucket:', err);
  }
}

exports.handler = async (event, context) => {
  console.log('Function `products` invoked')

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' }
  }

  try {
    const res = await GetBucket()
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(res),
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
