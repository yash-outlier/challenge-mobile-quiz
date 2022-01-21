import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const ProgressBar = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100
  return (
    <View
      style={[
        styles.container, {
        width: `${progressPercentage}%`,
      }]}
    />
  )
}

export default ProgressBar
