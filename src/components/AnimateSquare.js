import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    Button
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
    state = {
        w: 100,
        h: 100,
    };

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({ w: this.state.w + 25, h: this.state.h + 25 })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                    style={{ width: this.state.w, height: this.state.h }} 
                />
                <Button 
                    title="Rezise me"
                    onPress={this._onPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'lightblue',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
