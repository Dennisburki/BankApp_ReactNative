import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import MyTabs from './src/navigation/BottomTabNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import GlobalContext from './src/helpers/GlobalContext';
import { NavigationContainer } from '@react-navigation/native';

const contextValue = {
  user:"Mayer Franklin",
  index: 0
}

const App = () => (
<NavigationContainer>
  <GlobalContext.Provider value={contextValue}>
    <StatusBar style="auto" />
    <MyTabs/>
  </GlobalContext.Provider>
</NavigationContainer>
  
)

export default App