import React, { useState } from 'react'
import { View } from 'react-native'

import ProgressBar from '../ProgressBar'
import ResultScreen from '../ResultScreen'
import ScoreBar from '../ScoreBar'
import QuestionComponent from '../QuestionComponent'

import styles from './styles'

// Better if prop types are defined
const QuizScreen = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [correctQuestionCount, setCorrectQuestionCount] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  const totalQuestions = questions?.length || 0

  const onCompleteClick = isCorrect => {
    if (isCorrect) setCorrectQuestionCount(prevValue => prevValue + 1)
    setIsCompleted(true)
  }

  const onNextQuestionClick = isCorrect => {
    if (isCorrect) setCorrectQuestionCount(prevValue => prevValue + 1)
    setCurrentQuestion(prevValue => prevValue + 1)
  }

  // In order to shuffle the correct answer, this logic was placed here
  const getOptions = question => {
    const options = [...question.incorrect_answers]
    options.splice(Math.floor(Math.random() * options.length), 0, question.correct_answer)
    return options
  }

  return (
    <View style={styles.container}>
      {isCompleted && <ResultScreen totalQuestions={totalQuestions} correctQuestionCount={correctQuestionCount} /> }
      {!isCompleted && (
        <>
          <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
          <QuestionComponent
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onNextQuestionClick={onNextQuestionClick}
            question={questions[currentQuestion - 1]}
            onCompleteClick={onCompleteClick}
            options={getOptions(questions[currentQuestion - 1])}
          />
          <ScoreBar
            currentQuestion={currentQuestion}
            correctQuestionCount={correctQuestionCount}
            totalQuestions={totalQuestions}
          />
        </>        
      )}
    </View>
  )
}

export default QuizScreen
