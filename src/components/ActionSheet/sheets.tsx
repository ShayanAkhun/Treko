import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import MainActionSheet from './MainActionSheet';
import CardSheet from './CardSheet';

registerSheet('MainActionSheet', MainActionSheet);
registerSheet('CardSheet', CardSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    MainActionSheet: SheetDefinition<{
      payload: {
        value: string;
        navigation: any;
      };
    }>;
    CardSheet: SheetDefinition<{
      sheetId: string;
      payload: {
        Item: {name: string};
        Navigation: any;
      };
    }>;
  }
}

export {};
