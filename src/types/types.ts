export interface Coordinate {
  latitude: number;
  longitude: number;
}

export type RoutePoint = {
  latitude: number;
  longitude: number;
};

export type LoaderProps = {
message?: string;
  onRetry?: () => void;
  lottieOnly?: boolean;
};

export type ControlsProps = {
  location?: {
    latitude: number;
    longitude: number;
  };
  tracking: boolean;
  onStart: () => void;
  onStop: () => void;
};

