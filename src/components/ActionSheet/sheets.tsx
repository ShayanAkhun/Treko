import { registerSheet, SheetDefinition } from 'react-native-actions-sheet';
import MainActionSheet from './MainActionSheet';
import CardSheet from './CardSheet';

registerSheet("MainActionSheet", MainActionSheet);
registerSheet("CardSheet", CardSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'MainActionSheet': SheetDefinition<{
      payload: {
        value: string;
      };
    }>;
    'CardSheet': SheetDefinition<{
      payload: {
        item: { name: string };
      };
    }>;
  }
}

export {};
