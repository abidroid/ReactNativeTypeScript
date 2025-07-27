
import {View, Text} from 'react-native'
;
import styles from '../Splash/Splash.styles';
interface LandingProps {}

const Landing = (props: LandingProps) => {
    return (
        <View style={styles.container}>
            <Text>Landing Screen</Text>
        </View>
    );
};

export default Landing;