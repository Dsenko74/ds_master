import { useEffect, useState } from 'react'
import { client } from '../../sanityClient'

const SushiList = () => {
  const [sets, setSets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "dsmaster"]{
        _id,
        title,
        price,
        discount,
        description,
        ingredients,
        "imageUrl": image.asset->url
      }`)
      setSets(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {sets.map((set) => (
        <div key={set._id}>
          <h2>{set.title}</h2>
          <img src={set.imageUrl} alt={set.title} width="200" />
          <p>{set.description}</p>
          <p>Ціна: {set.price} грн</p>
          <p>Знижка: {set.discount || 0}%</p>
          <p>Інгредієнти: {set.ingredients?.join(', ')}</p>
        </div>
      ))}

     
    </div>
  )
}

export default SushiList
