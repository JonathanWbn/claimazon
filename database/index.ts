import AWS from 'aws-sdk'

AWS.config.update({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.JONATHAN_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.JONATHAN_AWS_SECRET_ACCESS_KEY,
  },
})

const docClient = new AWS.DynamoDB.DocumentClient()

async function fetchDocuments(table: string) {
  const params: AWS.DynamoDB.DocumentClient.ScanInput = {
    TableName: table,
  }

  try {
    const scanResponse = await docClient.scan(params).promise()

    return scanResponse.Items
  } catch (err) {
    throw new Error(
      `Fetching documents for table ${table} failed with error code ${err.code}`
    )
  }
}

export async function fetchProducts(): Promise<Database.Product[]> {
  const products = (await fetchDocuments('Products')) as Database.Product[]

  return products
}
