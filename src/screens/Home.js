import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';

class Home extends React.Component {


    state = {
        rawSellerList: [
            {
                'id': 1,
                'name': 'Tata Motors',
                'rating': 5,
                'description': 'This is the Tata description....',
                'timeslots': [
                    {
                        'time': '10:30',
                        'status': 0
                    },
                    {
                        'time': '11:30',
                        'status': 1
                    },
                    {
                        'time': '12:30',
                        'status': 1
                    },
                    {
                        'time': '01:30',
                        'status': 0
                    },
                    {
                        'time': '02:30',
                        'status': 1
                    },
                    {
                        'time': '03:30',
                        'status': 0
                    },
                ]
            },
            {
                'id': 2,
                'name': 'Reliance Digitals',
                'rating': 4,
                'description': 'Reliance seller information and details',
                'timeslots': [
                    {
                        'time': '10:30',
                        'status': 0
                    },
                    {
                        'time': '11:30',
                        'status': 1
                    },
                    {
                        'time': '12:30',
                        'status': 1
                    },
                    {
                        'time': '01:30',
                        'status': 0
                    },
                    {
                        'time': '02:30',
                        'status': 1
                    },
                    {
                        'time': '03:30',
                        'status': 0
                    },
                ]
            },
            {
                'id': 3,
                'name': 'MRF',
                'rating': 3,
                'description': 'MRF seller information and details',
                'timeslots': [
                    {
                        'time': '10:30',
                        'status': 0
                    },
                    {
                        'time': '11:30',
                        'status': 1
                    },
                    {
                        'time': '12:30',
                        'status': 1
                    },
                    {
                        'time': '01:30',
                        'status': 0
                    },
                    {
                        'time': '02:30',
                        'status': 1
                    },
                    {
                        'time': '03:30',
                        'status': 0
                    },
                ]
            },
            {
                'id': 4,
                'name': 'Infosys',
                'rating': 4,
                'description': 'Infosys seller information and details',
                'timeslots': [
                    {
                        'time': '10:30',
                        'status': 0
                    },
                    {
                        'time': '11:30',
                        'status': 1
                    },
                    {
                        'time': '12:30',
                        'status': 1
                    },
                    {
                        'time': '01:30',
                        'status': 0
                    },
                    {
                        'time': '02:30',
                        'status': 1
                    },
                    {
                        'time': '03:30',
                        'status': 0
                    },
                ]
            },
            {
                'id': 5,
                'name': 'Wipro',
                'rating': 4,
                'description': 'Wipro seller information and details',
                'timeslots': [
                    {
                        'time': '10:30',
                        'status': 0
                    },
                    {
                        'time': '11:30',
                        'status': 1
                    },
                    {
                        'time': '12:30',
                        'status': 1
                    },
                    {
                        'time': '01:30',
                        'status': 0
                    },
                    {
                        'time': '02:30',
                        'status': 1
                    },
                    {
                        'time': '03:30',
                        'status': 0
                    },
                ]
            },
        ],
        filteredSellerList: [],
        filterText: ''
    }

    componentDidMount() {
        this.setState({
            filteredSellerList: this.state.rawSellerList
        })
    }

    _renderSellerItem = ({ item, index, seperator }) => {
        return (
            <TouchableOpacity onPress={() => this._handleItemPress(item)} >
                <View style={styles.item}>
                    <Text style={styles.itemHeader}>{item.name}</Text>
                    <Text style={styles.itemRating}>Rating: {item.rating}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _filterSellerList = (text) => {

        console.log(text);
        if (text) {
            const newData = this.state.rawSellerList.filter((item) => {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

            console.log(newData)
            this.setState({
                filteredSellerList: newData,
                filterText: text
            });
        } else {
            this.setState({
                filteredSellerList: this.state.rawSellerList,
                filterText: text
            });
        }
    }

    _handleItemPress = (item) => {
        this.props.navigation.navigate(
            'Details',
            item
        )
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TextInput
                    style={styles.searchBar}
                    placeholder='Search Seller...'
                    onChangeText={(text) => this._filterSellerList(text)}
                    value={this.state.filterText} />
                <FlatList
                    style={styles.list}
                    data={this.state.filteredSellerList}
                    renderItem={this._renderSellerItem}
                    keyExtractor={(item, index) => item.id} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 8,
        marginVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white'
    },
    list: {
        marginHorizontal: 8,
        backgroundColor: 'white'
    },
    item: {
        marginBottom: 8,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    itemHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white'
    },
    itemRating: {
        fontSize: 15,
        backgroundColor: 'white'
    },
    itemDescription: {
        backgroundColor: 'white',
    },
});

export default Home;