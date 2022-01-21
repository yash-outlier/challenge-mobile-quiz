import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import QuizScreen from './src/Components/QuizScreen'

// More points if instead of hardcoding
// an api call is made to get this data
import questions from './src/questions.json'

const App = () => {
  return (
    <SafeAreaView>
      <QuizScreen questions={questions} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
