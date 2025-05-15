import React, { useEffect, useState, useRef } from 'react';
import { View,Dimensions } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { requestLocationPermission, checkLocationEnabled, promptEnableLocation, saveRouteHistory, loadRouteHistory } from '../utils/locationUtils';
import Header from '../components/Header';
import Controls from '../components/Controls';
import RouteHistory from '../components/HistoryPanel';
import Loader from '../components/Loader';
import { Coordinate } from '../types/types';
import appColors from '../theme/appColors';

type Location = {
  latitude: number;
  longitude: number;
  timestamp?: number;
};

const screen = Dimensions.get('window');

const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [tracking, setTracking] = useState<boolean>(false);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [route, setRoute] = useState<Location[]>([]);
  const routeRef = useRef<Location[]>([]);

  useEffect(() => {
    startTracking();
    loadRouteHistory().then((storedRoute : Coordinate[] | null) => {
      if (storedRoute) {
        setRoute(storedRoute);
        routeRef.current = storedRoute;
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (watchId !== null) Geolocation.clearWatch(watchId);
    };
  }, [watchId]);

  const startTracking = async () => {
    setLoading(true);
    setErrorMessage(null);

    const enabled = await checkLocationEnabled();
    if (!enabled && !(await promptEnableLocation())) {
      setErrorMessage('Location services are not enabled.');
      setLoading(false);
      return;
    }

    if (!(await requestLocationPermission())) {
      setErrorMessage('Location permission denied.');
      setLoading(false);
      return;
    }

    setTracking(true);
    const id = Geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const newLoc = { latitude, longitude, timestamp: pos.timestamp };
        setLocation(newLoc);
        routeRef.current = [...routeRef.current, newLoc];
        setRoute(routeRef.current);
        saveRouteHistory(routeRef.current);
        setLoading(false);
      },
      (err) => {
        setErrorMessage(err.message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 5,
        interval: 3000,
        fastestInterval: 1000,
      }
    );

    setWatchId(id);
  };

  const stopTracking = () => {
    if (watchId !== null) Geolocation.clearWatch(watchId);
    setTracking(false);
    setWatchId(null);
  };

  if (loading && !location) return <Loader message="Loading your location..." />;
  if (errorMessage) return <Loader message={errorMessage} onRetry={startTracking} />;
  if (!location) return <Loader lottieOnly />;

  const region: Region = { ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 };

  return (
    <View style={styles.container}>
      <Header route={route} />
      <View style={{ height: screen.height * 0.5 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          showsUserLocation
          followsUserLocation
       >
  {location && (
    <Marker coordinate={location}>
      <View style={styles.marker}>
        <Icon name="location-on" size={24} color="#fff" />
      </View>
    </Marker>
  )}
  {route.length > 1 && (
    <Polyline
      coordinates={route}
      strokeColor={appColors.lightPink}
      strokeWidth={4}
    />
  )}
</MapView>
      </View>
      <Controls location={location} tracking={tracking} onStart={startTracking} onStop={stopTracking} />
      {route.length > 0 && <RouteHistory route={route} />}
    </View>
  );
};

export default MapScreen;
