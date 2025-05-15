import React from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Header = ({ route }: { route: any[] }) => {
  return (
    <View style={[styles.header, { paddingTop: Platform.OS === 'ios' ? 50 : 16 }]}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Location Tracker</Text>
      </View>
      <View style={styles.headerStats}>
        <View style={styles.statItem}>
          <Icon name="directions-walk" size={16} color="#5E8BFF" />
          <Text style={styles.statText}>{route.length * 10} m</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="timer" size={16} color="#5E8BFF" />
          <Text style={styles.statText}>{route.length} pts</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
