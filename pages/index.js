import Link from 'next/link'
import NewGame from '../components/newGame'

const boardStyle = {
    position: 'relative',
    top: 15,
    flexWrap: "wrap",
    width:75,
    height:75,
    backgroundColor:`Blue`,
    padding: 30,
    margin: 10,
    }

const flexBox = {
  display: 'flex',
  flexWrap: 'wrap'
}

const Index = () => (
  <div>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <Link href="/rules">
      <button>Go to the Rules Page</button>
    </Link>
      <h1>Welcome to Numventure</h1>
      <h2>The game of random number knowledge!</h2>
      <h4>Please visit the Rules page to find out how the game works!</h4>
      <NewGame />
      <div className='flex-container' style={ flexBox }>
        { renderBoard() }
      </div>
  </div>

)
const renderBoard = () => {
  let boardArr = [];
  for (let j = 0; j < 21; j++) {
    boardArr.push(<i key={ j } className='board' style={ boardStyle } id={ `square-${j}`}>{ j }</i>)
  }
  return boardArr;
}

export default Index
