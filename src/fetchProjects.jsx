import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

/* instance */
const client = createClient({
  space: 'hl8wjhewovai',
  environment: 'master',
  /* test with npm run dev */
  accessToken: import.meta.env.VITE_API_KEY,
})

/* custom hook - array per info su caricamento e progetti */
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  /* async - await / parse */
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      /* map items with response; localizzo dove trovare questi items ( = item. ...) */
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        /* So I'm going to come up with the property IMG and then I'm looking for image object.
        If it exists, then grab me the fields.
        If fields exist, then get me the file and if file exists, then grab me the URL. */
        const img = image?.fields?.file?.url
        /* return items */
        return { title, url, id, img }
      })
      /* And now once I have these projects in place, now I want to go. And set my state value equal to the project. */
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  /* funzione che viene invoked quando il component viene montato */

  useEffect(() => {
    getData()
  }, [])

  /* what are we going to export from useFetch projects? Because at the moment we're just importing the entire file in the projects component.
But actually we only want to provide the loading and projects. So initially it's going to be true, an empty array, and then once we're done fetching, then of course
it's going to be false and whatever we have in the array. */
  return { loading, projects }
}

/* client get entries */
client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))

/* un'opzione: you go with set projects and you just set response dot and then items. ma serve sempre parse */
