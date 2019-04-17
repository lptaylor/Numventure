import Question from '../components/question'

class Dice extends React.Component {
  constructor(){
    super()
    const dice1 = (<img src='./static/dice-1.png' alt="dice" style={ diceStyle } onClick={(e) => this.handleClick(e)} />);
    const dice2 = (<img src='./static/dice-2.png' alt="dice" style={ diceStyle } onClick={(e) => this.handleClick(e)} />);
    const dice3 = (<img src='./static/dice-3.png' alt="dice" style={ diceStyle } onClick={(e) => this.handleClick(e)} />);
    const dice4 = (<img src='./static/dice-4.png' alt="dice" style={ diceStyle } onClick={(e) => this.handleClick(e)} />);
    const dice5 = (<img src='./static/dice-5.png' alt="dice" style={ diceStyle } onClick={(e) => this.handleClick(e)} />);
    const dice6 = (<img src='./static/dice-6.png' alt="dice" style={ diceStyle } onClick={(e) => this.handleClick(e)} />);

    this.state = {
      index: 0,
      dice_arr: [dice1,dice2,dice3,dice4,dice5,dice6],
      question: null
    }
  }

  handleClick() {
   this.setState({
     index: randomNum(),
     question: getQuestion()
   })
   debugger
  }

  render () {
        return this.state.dice_arr[this.state.index];
  }
}

function randomNum() {
  return Math.floor(Math.random() * 6);
}

function randomQuestion() {
  return Math.floor(Math.random() * 500);
}

const diceStyle = {
    position: 'relative',
    display: 'inline',
    bottom: 15,
    left: 25,
    width:75,
    height:75,
    }

async function getQuestion() {
  const res = await fetch(`http://numbersapi.com/${randomQuestion()}/trivia?fragment&json`)
  const json = await res.json()

  { console.log(`${json.text}`) }
  { console.log(`${json.number}`) }

  return res.text;
}

export default Dice
