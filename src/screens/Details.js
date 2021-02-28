import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

class Details extends React.Component {
    state = {
        details: {},
        currentSelectedItem: null
    }

    componentDidMount() {
        const details = this.props.route.params;

        this.setState({
            details: details
        });
    }

    _renderTimeSlots = ({ item, index, seperator }) => {
        return (
            <TouchableOpacity
                style={[styles.timeSlotItem, item.status ? { backgroundColor: 'red' } : { backgroundColor: 'green' }]}
                onPress={() => this._selectAnItem(item)}
                disabled={item.status}>
                <View>
                    <Text style={{ color: 'white' }}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _selectAnItem = (item) => {
        Alert.alert('Confirm', 'Do you want to book the selected timing?',
            [
                {
                    text: 'Cancel',
                    style: 'destructive',
                    onPress: () => { }
                },
                {
                    text: 'Book',
                    style: 'default',
                    onPress: () => {alert("Your booking is confirmed!") }
                }
            ])
    }

    render() {

        const { name, rating, timeslots, description } = this.state.details;

        return (
            <View style={styles.container}> 
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.rating}>Rating: {rating}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.timeslotHeading}>Select a timeslot</Text>
                <FlatList
                    data={timeslots}
                    renderItem={this._renderTimeSlots}
                    numColumns={3}
                    keyExtractor={(item, index) => item.time} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex : 2,
      backgroundColor: 'white'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        marginHorizontal: 8,
        marginTop: 10
    },
    rating: {
        fontSize: 15,
        marginHorizontal: 8,
        marginTop: 8
    },
    description: {
        color: 'grey',
        marginHorizontal: 8,
        marginTop: 8
    },
    timeslotHeading: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: 20,
        marginTop: 10
    },
    timeSlotItem: {
        flex: 1,
        alignItems: 'center',
        borderWidth: .5,
        borderColor: 'black',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 4
    },
});

export default Details;