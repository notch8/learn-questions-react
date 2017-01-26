import React, { Component } from 'react'
import Question from './Question'

class App extends Component {
  constructor (){
    super()
    this.state = {
      baseUrl: 'http://localhost:3000',
      questions: []
    }

    fetch(this.state.baseUrl + '/questions').then((response) =>{
      return response.json()
    }).then((questions)=>{
      this.setState({questions: questions});
    })
  }

  handleUpvote(questionIndex){
    let questionId = this.state.questions[questionIndex].id
    fetch(this.state.baseUrl + '/questions/' + questionId + '/upvotes', 
      {method: 'POST'}
    ).then((response)=>{
      this.state.questions[questionIndex].upvotes_count++
      this.setState({questions: this.state.questions})
    })
  }

  render () {
    return (
      <div className="App">
        <ul>
          {this.state.questions.map((question, index) =>{
            return (
              <li key={question.id}>
                <Question 
                  text={question.text} 
                  upvotes={question.upvotes_count} 
                  index={index} 
                  upvoteHandler={this.handleUpvote.bind(this)} ></Question>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
