import 'styled-components';
import { FontsType, ColorsType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: FontsType;
    colors: ColorsType;
  }
}
