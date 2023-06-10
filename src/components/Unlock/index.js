// Write your code here
import {useState} from 'react'
import {Container, Image, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [value, setValue] = useState(true)
  const onClickLock = () => {
    setValue(prevState => !prevState)
  }

  const image = value
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const headingText = value
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const buttonText = value ? 'Unlock' : 'Lock'
  const altValue = value ? 'Lock' : 'Unlock'
  return (
    <Container>
      <Image src={image} alt={altValue} />
      <Heading>{headingText}</Heading>
      <Button type="button" onClick={onClickLock}>
        {buttonText}
      </Button>
    </Container>
  )
}

export default Unlock
