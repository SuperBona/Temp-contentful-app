import { useFetchProjects } from './fetchProjects'

function Projects() {
  const { loading, projects } = useFetchProjects()
  /* condizioni per loading true e false - iterate over items se loading è false - se è true, scritta loading */
  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, img, url, title } = project
          return (
            <a
              key={id}
              href={url}
              target='_blank'
              rel='noreferrer' /* important with blank */
              className='project'
            >
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )

  /*  console.log(loading, projects) */
  return <h2>Projects</h2>
}
export default Projects
