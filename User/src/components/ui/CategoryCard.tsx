import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Category } from '../../types/types';



const CategoryItem = ({props}: {props: Category}) => {
  return (
    <TouchableOpacity key={props.id} style={styles.categoryItem}>
      <View style={styles.categoryContent}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.image.url}} style={styles.categoryImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryTitle}>{props.name}</Text>
          <Text style={styles.categorySubtitle}>{props.description}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Icons name="chevron-down" size={20} color="#333" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginBottom: 8,
    backgroundColor: '#ffffff',
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
    fontFamily: 'System',
  },
  categorySubtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 18,
    fontFamily: 'System',
  },
  arrowContainer: {
    paddingLeft: 16,
  },
});

export default CategoryItem;
