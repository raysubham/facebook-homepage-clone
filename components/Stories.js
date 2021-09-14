import weeknd from './assets/the-weeknd.jpeg'
import mello from './assets/marshmello.jpeg'
import zayn from './assets//zayn.jpg'
import harry from './assets/harry-styles.jpg'
import { StoryCard } from './StoryCard'

const stories = [
  {
    name: 'The Weeknd',
    src: weeknd,
  },
  {
    name: 'Marshmello',
    src: mello,
  },
  {
    name: 'Zayn Malik',
    src: zayn,
  },
  {
    name: 'Harry Styles',
    src: harry,
  },
]

export const Stories = () => {
  return (
    <div className='flex justify-center mx-auto space-x-auto'>
      {stories.map((story, index) => {
        return <StoryCard name={story.name} src={story.src} key={index} />
      })}
    </div>
  )
}
