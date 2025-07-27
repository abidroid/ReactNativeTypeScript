import {View, Text} from 'react-native';
import styles from './Splash.styles';


interface SplashProps {}

const Splash = (props: SplashProps) => {

    return (

        <View style={styles.container}>
            <Text>TypeScript</Text>
        </View>
    );
}

export default Splash;