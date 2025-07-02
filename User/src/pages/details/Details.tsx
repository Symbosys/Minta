import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'

export default class Details extends Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <ScrollView >
          {data.map((i,index) => (
            <Image key={index} style={styles.image} source={{
              uri: 'https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2Fa106babe-00f2-7227-e669-52c25a90b775%2Foriginal%2F1703871661996.jpg&w=384&q=75'
            }} />
          ))}
       </ScrollView>

       <View>
          <Text style={styles.heading}>Cafe 18 Plaza</Text>
          <Text style={styles.text}>Prosciutto e funghi is a pizza variety that is topped with tomato sauce.</Text>
       </View>

       <View style={styles.row}>
          <Text style={styles.b}>⭐ 4.7</Text>
          <Text>Free</Text>
          <Text>20 min</Text>
       </View>

       <View>
          <Text style={[styles.b, styles.mt]}>
            Ingridents
        </Text>
<ScrollView horizontal style={styles.m}>

            <Text style={[styles.block, styles.m]}>Tomato</Text>
            <Text style={[styles.block, styles.m]}>Potato</Text>
            <Text style={[styles.block, styles.m]}>Onion</Text>
            <Text style={[styles.block, styles.m]}>Oil</Text>
</ScrollView>

         <View style={styles.footer}>
            <View style={[styles.row, styles.priceContainer]}>
              <Text style={styles.price}>₹32</Text>
              <Text>- 2 +</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.button}>
                Add Cart
              </Text>
            </TouchableOpacity>
         </View>

       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
conatiner:{
  padding:20
},
  image:{
    height:200,
    width:'auto',
    borderRadius: 20
  },
  row:{
    flex:1,
    flexDirection:"row",
    // alignItems:"flex-start",
    justifyContent:"space-between",
    marginTop: 15

  },
  heading:{
    marginTop:20,
    fontWeight:900,
    fontSize:18
  },
  text:{
    marginTop: 15,
    fontSize:12,
    color:"#A0A5BA"

  },

  block:{
    backgroundColor:"#FFEBE4",
    borderRadius:15,
    padding:10,
    paddingHorizontal:15,
    width:'auto'
  },
  b:{
    fontWeight:900
  },
  mt:{
    marginTop:25
  },
  m:{margin:6},
  buttonContainer: {
    width: '100%',
    marginTop: 30
  },
  button: {

    fontSize: 15,
    fontWeight: "600",
    backgroundColor: '#FF7622',
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    textAlign: "center"
  },

  priceContainer:{
    marginTop: 50,

  },
  price:{
    fontSize:25,
    fontWeight:900,
    
  },
  footer:{
    // position:"fixed",
    
  }
})

const data = Array(1).fill({});