import fetch from 'isomorphic-unfetch'

class Question extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <h2>
        {this.props.question}
      </h2>
      )
     }
}
export default Question
