import React, { useState, useRef, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity
} from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { StackScreenProps } from '@react-navigation/stack';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAnimation } from '../hooks/useAnimation';

const { width: widthScreen } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any, any> { };

export const SlidesScreen = ({ navigation }: Props) => {
  const { theme: { colors } } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const { fadeIn, opacity } = useAnimation();
  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{ ...styles.container, backgroundColor: colors.background }}
      >
        <Image source={item.img} style={{ width: '100%', height: 400 }} />
        <Text style={{ ...styles.title, color: colors.primary }}>{item.title}</Text>
        <Text style={{ ...styles.subTitle, color: colors.text }}>{item.desc}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        layout="default"
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
      }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary
          }}
        />
        <Animated.View style={{
          opacity
        }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.background,
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 5
            }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>Entrar</Text>
            <Icon name='chevron-forward-outline' size={25} color={colors.primary} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center'
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16
  }
});