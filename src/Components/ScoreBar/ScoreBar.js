import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const ScoreBar = ({
  currentQuestion,
  correctQuestionCount,
  totalQuestions
}) => {
  const score = currentQuestion === 1 ? 0 : (correctQuestionCount / (currentQuestion - 1)) * 100
  const lowestPossibleScore = (correctQuestionCount / totalQuestions) * 100
  const remainingQuestionCount = totalQuestions - (currentQuestion - 1)
  const maxScore = ((correctQuestionCount + remainingQuestionCount) / totalQuestions) * 100

  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <Text> Score: {score.toFixed(2)}% </Text>
        <Text> Max Score: {maxScore.toFixed(2)}% </Text>
      </View>
      <View style={styles.scoreBars}>
        <View
          style={[
            styles.bar,
            styles.maxScoreBar,
            { width: `${maxScore}%` }
          ]}
        />
        {score > 0 && (
          <View
            style={[
              styles.bar,
              styles.scoreBar,
              { width: `${score}%` }  
            ]}
          />
        )}
        {lowestPossibleScore > 0 && (
          <View
            style={[
              styles.bar,
              styles.lowestPossibleScoreBar,
              { width: `${lowestPossibleScore}%` }  
            ]}
          />
        )}
      </View>
    </View>
  )
}

export default ScoreBar
