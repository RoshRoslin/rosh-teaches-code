import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import YoutubeIcon from '@material-ui/icons/YouTube'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.link && (
      <a href={project.link} aria-label='link' className='link link--icon'>
        <YoutubeIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
        <img src={project.img} alt='preview of video' />
      </a>
    )}
  </div>
)

export default ProjectContainer
