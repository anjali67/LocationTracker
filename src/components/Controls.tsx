import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { ControlsProps } from '../types/types';

const Controls = ({ location, tracking, onStart, onStop }: ControlsProps) => (
  <View style={styles.controls}>
    <View style={styles.coordinates}>
      <View style={styles.coordinateRow}>
        <Icon name="my-location" size={18} color="#5E8BFF" />
        <Text style={styles.coordinateText}>
          {location?.latitude.toFixed(6)}, {location?.longitude.toFixed(6)}
        </Text>
      </View>
    </View>
    <View style={styles.buttonsRow}>
      <TouchableOpacity
        style={[styles.actionButton, tracking ? styles.stopButton : styles.startButton]}
        onPress={tracking ? onStop : onStart}
      >
        <Icon name={tracking ? 'stop' : 'play-arrow'} size={24} color="#fff" />
        <Text style={styles.actionButtonText}>
          {tracking ? 'Stop Tracking' : 'Start Tracking'}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Controls;
