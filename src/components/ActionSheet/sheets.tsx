import {registerSheet, SheetDefinition, SheetManager} from 'react-native-actions-sheet';
import MainActionSheet from './MainActionSheet';
import CardSheet from './CardSheet';

registerSheet('MainActionSheet', MainActionSheet);
registerSheet('CardSheet', CardSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    "MainActionSheet": SheetDefinition<{
      payload: {
        value: React.ReactNode;
      };
    }>;
    "CardSheet": SheetDefinition<{
      sheetId: string;
      payload: {
        value: string;
      };
    }>;
  }
}

SheetManager.show("CardSheet", {
  payload: { value: "Hello World" },
});

export {};
