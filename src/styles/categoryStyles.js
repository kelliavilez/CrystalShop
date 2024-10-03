import { StyleSheet } from 'react-native';
import OfertsCard from '../components/OfertsCard';

const styles = StyleSheet.create({
    card: {
        borderRadius: 50,
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: '#307828'
    },
    textContainer: {
        width: 100,
        justifyContent: 'left'
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#d6e3ca',
        width: 384
    },
    photo: {
        borderRadius: 50,
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: -3
    }
});

export default styles;