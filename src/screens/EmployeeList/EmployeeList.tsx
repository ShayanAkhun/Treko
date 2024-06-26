import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../../components/Card/Card'

const EmployeeList = ({navigation}) => {
  return (
    <SafeAreaView>
      <Card navigation={navigation.navigate("Card")}/>
    </SafeAreaView>
  )
}

export default EmployeeList