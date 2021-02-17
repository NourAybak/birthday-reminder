import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function PeopleBD(){

// ..data
const writeBD = (day = 1, month = 1) => new Date(((new Date).getFullYear()), (month - 1), day)
const people = [
	{name: 'p1', bday: writeBD(1, 1), yearBorn: 2003},
	{name: 'p2', bday: writeBD(1, 2), yearBorn: 2002},
	{name: 'p3', bday: writeBD(1, 3), yearBorn: 2001},
];const peopleBdays = []; people.forEach(p => peopleBdays.push(p.bday))
const numOfPpl = people.length
// data..

// ..functionality
const whosNext = () => {
    let currentDate = new Date()
    // getting next birthday date
    let trueArray = [];
    for (let i in peopleBdays) {
        if (currentDate <= peopleBdays[i])
            trueArray.push(peopleBdays[i])
    }
    let nextBirthDay = (new Date(Math.min(...trueArray)))
    // getting whose birthday is it
    let nextPerson = 'Mr. Nobody'
    for (let i of people) {
        if (Number(nextBirthDay) == Number(i.bday))
            nextPerson = i
    }
    return(`${nextPerson.name}: ${nextBirthDay.toDateString()}, Age: ${((new Date()).getFullYear())-(nextPerson.yearBorn)}`)
}
// functionality..
    
    return (
        <View>
            <Text>{whosNext()}</Text>
            <Text>currently saved: {numOfPpl} people</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   
})