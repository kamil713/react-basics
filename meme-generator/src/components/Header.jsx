import trollFace from '../assets/images/troll-face.png'

export default function Header() {
  return (
    <header className='header'>
      <img src={trollFace} className='header--image'/>
      <h1 className='header--title'>Meme Generator</h1>
      <h3 className='header--project'>React Course - Project 3</h3>
    </header>
  );
}
