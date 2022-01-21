import React from 'react'
import { Pressable, Text, View } from 'react-native'

import styles from './styles'

const Options = ({
  options,
  isAnswered,
  selectedOption,
  correctAnswer,
  setSelectedOption,
  getDecodedValue
}) => (
  <View style={styles.options}>
    {options.map((option, index) => {
      
      const buttonStyle = [
        styles.option,
        isAnswered ? styles.disabled : {},
        selectedOption === option ? styles.selectedOption : {},
        isAnswered && option === correctAnswer ? styles.correctOption : {},
      ]

      const textStyle = [
        selectedOption === option ? styles.selectedOption : {},
        isAnswered && option === correctAnswer ? styles.correctOption : {},
      ]

      return (
        <Pressable
          key={index}
          style={buttonStyle}
          onPress={() => {
            if (!isAnswered) setSelectedOption(option)
          }}
        >
          <Text style={textStyle}>
            {getDecodedValue(option)}
          </Text>
        </Pressable>
      )
    })}
  </View>
)

export default Options
