import Dice from '../components/dice'

class NewGame extends React.Component {
  state = {
    showDice: false
  }

  handleClick() {
   initGame();
  }

  render() {
    return (
      <div>
    <button onClick={(e) => this.handleClick(e)}>
      New Game
    </button>
    <Dice />

    </div>
  );
  }
}

function initGame() {
  console.log('The Game is Afoot');
}

export default NewGame
