import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'n3l35jw0',     // заміни на свій
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-05-06',
})
// const query = `*[_type == "dsmaster"]{
//   _id,
//   title,
//   price,
//   discount,
//   description,
//   ingredients,
//   "imageUrl": image.asset->url,
//   oldPrice,
//   weight,
//   cashback,
//   novelty,
//   action,
//   categories,
// }`

// client.fetch(query)
//   .then((data) => {
//     console.log('Fetched data:', data)
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error)
//   })