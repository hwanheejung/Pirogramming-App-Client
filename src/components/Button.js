import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'
import React from 'react'
import { FontStyledText } from './Text'
import { COLORS } from '../assets/Theme'

export const MainButton = ({height = 70, content, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, {height: height}]} onPress={onPress}>
      <FontStyledText style={styles.text}>{content}</FontStyledText>
    </TouchableOpacity>
  )
}

export const MiniButton = ({outline, onPress, children}) => {
  return (
    <TouchableOpacity style={miniStyles({outline}).miniContainer} onPress={onPress}>
      <FontStyledText style={miniStyles({outline}).miniText}>{children}</FontStyledText>
    </TouchableOpacity>
  )
}

export const LoginButton = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.loginContainer} onPress={onPress}>
      <FontStyledText style={styles.loginText}>{children}</FontStyledText>
    </TouchableOpacity>
  )
}

export const LeftArrowBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../assets/icons/left-arrow.png")} style={styles.arrow} />
    </TouchableOpacity>
  )
}
export const RightArrowBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../assets/icons/right-arrow.png")} style={styles.arrow} />
    </TouchableOpacity>
  )
}

export const CouponButton = ({selected, content, onPress}) => {
  const couponStyle = content === selected ? styles.couponSelected : styles.couponNotSelected;
  const couponText = content === selected ? styles.text : styles.notSelectedText;
  return (
    <TouchableOpacity style={couponStyle} onPress={onPress}>
      <FontStyledText style={couponText}>{content}</FontStyledText>
    </TouchableOpacity>
  )
}

export const ConfirmSmallBtn = ({content}) => {
  return (
    <TouchableOpacity style={styles.confirmSmallContainer}>
      <FontStyledText style={styles.confirmSmallText}>{content}</FontStyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: COLORS.green,
    borderRadius: 15,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000000',
  },
  loginContainer: {
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: COLORS.green,
    borderRadius: 15,
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
  arrow: {
    resizeMode: 'contain',
  },
  couponNotSelected: {
    justifyContent: 'center',
    width: '70%',
    height: 50,
    backgroundColor: COLORS.light_gray,
    borderRadius: 10,
  },
  couponSelected: {
    justifyContent: 'center',
    width: '70%',
    height: 50,
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  notSelectedText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  confirmSmallContainer: {
    backgroundColor: COLORS.green,
    borderRadius: 30,
    position: 'absolute',
    right: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  confirmSmallText: {
    color: COLORS.bg_black,
    fontSize: 16,
    textAlign: 'center',  
  }
})

const miniStyles = ({outline}) => StyleSheet.create({
  miniContainer: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: outline ? 'transparent' : COLORS.green,
    borderRadius: 13,
    borderColor: outline ? COLORS.green : 'none',
    borderWidth: 3,
  },
  miniText: {
    fontSize: 18,
    textAlign: 'center',
    color: outline ? 'white' : '#000000',
  }
})