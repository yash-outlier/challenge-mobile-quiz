import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const ResultScreen = ({
  correctQuestionCount,
  totalQuestions
}) => {
  const score = (correctQuestionCount / totalQuestions) * 100

  return (
    <View style={styles.container}>
      <Text> Challenge Completed </Text>
      <Text> Your score is: {score.toFixed(2)}% </Text>
    </View>
  )
}

export default ResultScreen
