import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import DifficultyLevel from '../DifficultyLevel'
import Options from '../Options'
import styles from './styles'


const getDecodedValue = value => decodeURIComponent(value)

const QuestionComponent = ({
  question,
  currentQuestion,
  totalQuestions,
  onNextQuestionClick,
  onCompleteClick,
  options = []
}) => {
  const [selectedOption, setSelectedOption] = useState('')

  const isAnswered = selectedOption !== ''
  const isCorrect = selectedOption === question.correct_answer

  const onNavigationPress = () => {
    (currentQuestion === totalQuestions) ? onCompleteClick(isCorrect) : onNextQuestionClick(isCorrect)
    setSelectedOption('')
  }
  const navigationText = (currentQuestion === totalQuestions) ? 'Complete' : 'Next Question'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Question {currentQuestion} of {totalQuestions}
      </Text>
      <Text style={styles.category}>
        {getDecodedValue(question.category)}
      </Text>
      <DifficultyLevel difficulty={question.difficulty} />
      <Text style={styles.question}>
        {getDecodedValue(question.question)}
      </Text>
      <Options
        options={options}
        isAnswered={isAnswered}
        selectedOption={selectedOption}
        correctAnswer={question.correct_answer}
        setSelectedOption={setSelectedOption}
        getDecodedValue={getDecodedValue}
      />
      {isAnswered && (
        <Text style={styles.result}>
          {isCorrect ? 'Correct!' : 'Sorry!'}
        </Text>
      )}
      {isAnswered && (
        <Pressable
          onPress={onNavigationPress}
          style={styles.navigationContainer}
        >
          <Text style={styles.navigationText}>
            {navigationText}
          </Text>
        </Pressable>
      )}

    </View>
  )
}

export default QuestionComponent
