import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(name: string, params: string) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
