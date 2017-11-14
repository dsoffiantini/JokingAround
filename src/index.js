import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Analytics from 'mobile-center-analytics';

class App extends Component {
    state = {
        joke: 'Tap Here For A Joke'
    }

    fetchJoke() {
        fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'text/html'}})
            .then(r => r.text())
            .then(joke => this.setState({joke}));
        this.setState({ joke: '...'});
        this.track();
    }

    track() {
        Analytics.trackEvent('New Joke', { time: new Date().getTime() })
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.fetchJoke()}>
                    <Text>{this.state.joke}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default App;