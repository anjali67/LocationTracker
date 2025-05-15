import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { LoaderProps } from '../types/types';
const Loader = ({ message, onRetry }: LoaderProps) => (
  <View style={styles.centered}>
    <LottieView
      source={require('../assets/lottie/1.json')}
      autoPlay
      loop={!onRetry}
      style={styles.lottie}
    />
    {message && <Text style={styles.message}>{message}</Text>}
    {onRetry && (
      <TouchableOpacity style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    )}
  </View>
);


export default Loader;
