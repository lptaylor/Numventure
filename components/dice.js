class Dice extends React.Component {
  render () {
    return <img src="/static/dice-1.png" alt="dice-1" style={ diceStyle } />;
  }
}

const diceStyle = {
    position: 'relative',
    display: 'inline',
    bottom: 15,
    left: 25,
    width:75,
    height:75,
    }

export default Dice
