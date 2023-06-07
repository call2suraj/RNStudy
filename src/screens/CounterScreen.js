// Imports: Dependencies
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as appActions from '../redux/actions';
import { styles } from "../styles/CounterScreen";

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Screen: Counter
class CounterScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state, actions, counter } = this.props;
    console.log("this.props==", this.props)
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>

        {/* action to saga call example */}
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => actions.incrementAsync({data:'my extr data'})}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <Text style={styles.counterText}>{counter}</Text>
          {/* action to reducer call example */}      
          <TouchableOpacity onPress={actions.decrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // console.log(state);
  // Redux Store --> Component
  return {
    counter: state.counter.counter,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
