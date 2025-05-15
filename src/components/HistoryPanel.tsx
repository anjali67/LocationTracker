import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import appColors from '../theme/appColors';

const screen = Dimensions.get('window');

const RouteHistory = ({ route }: { route: any[] }) => (
  <View style={[styles.historyPanel, { maxHeight: screen.height * 0.3 }]}>
    <View style={styles.historyHeader}>
      <Icon name="list-alt" size={20} color={appColors.lightPink} />
      <Text style={styles.historyTitle}>Route History</Text>
    </View>
    <ScrollView style={styles.historyScroll}>
      {route.map((loc, i) => (
        <View key={i} style={styles.historyItem}>
          <Text style={styles.historyIndex}>{i + 1}</Text>
          <View style={styles.historyCoords}>
            <Text style={styles.historyCoordText}>
              {loc.latitude.toFixed(6)}, {loc.longitude.toFixed(6)}
            </Text>
            {loc.timestamp && (
              <Text style={styles.historyTime}>
                {new Date(loc.timestamp).toLocaleTimeString()}
              </Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default RouteHistory;
