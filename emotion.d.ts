// You are also able to use a 3rd party theme this way:
import '@emotion/react'
import { MD3Theme } from 'react-native-paper';

declare module '@emotion/react' {
  export interface Theme extends MD3Theme {
    spacing: (space: number) => string;
  }
}