import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  options: {
    marginTop: 16,
    flexDirection: 'row',
    // flex: 1,
    // flexBasis: 'wrap'
    flexWrap: 'wrap',
  },
  option: {
    color: 'red',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eee',
    borderRadius: 5,
    fontSize: 14,
    width: '45%',
    marginTop: 20,
    padding: 10,
    paddingLeft: 20,
    justifyContent: 'space-between',
    marginRight: 'auto'
  },
  disabled: {
    opacity: 0.5,
  },
  selectedOption: {
    backgroundColor: '#fff',
    color: '#000',
    opacity: 1,
  },
  correctOption: {
    backgroundColor:  '#000',
    color: '#fff',
    opacity: 1,
  },

});

export default styles
