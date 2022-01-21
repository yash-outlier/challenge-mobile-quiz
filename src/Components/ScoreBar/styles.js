import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 'auto',
    marginBottom: 50,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  scoreBars: {
    height: 21,
    borderWidth: 1,
    borderRadius: 5,
  },
  bar: {
    position: 'absolute',
    height: 19,
    borderRadius: 5,
  },
  maxScoreBar: {
    backgroundColor: '#ccc',
  },
  scoreBar: {
    backgroundColor: '#aaa',
  },
  lowestPossibleScoreBar: {
    backgroundColor: '#000',
  }
});

export default styles
