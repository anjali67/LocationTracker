import { Platform, PermissionsAndroid, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';

const STORAGE_KEY = '@user_route_history';

export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch {
      return false;
    }
  }
  return true;
};

export const checkLocationEnabled = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      return await isLocationEnabled();
    } catch {
      return false;
    }
  }
  return true;
};

export const promptEnableLocation = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      await promptForEnableLocationIfNeeded();
      return true;
    } catch (error: any) {
      Alert.alert('Enable Location', error.message);
      return false;
    }
  }
  return true;
};

export const saveRouteHistory = async (locations: any[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
  } catch (e) {
    console.warn('Save failed', e);
  }
};

export const loadRouteHistory = async (): Promise<any[] | null> => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.warn('Load failed', e);
    return null;
  }
};
