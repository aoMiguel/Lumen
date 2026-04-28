import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useRef, useState, useEffect } from 'react';

type DrawerNavigation = DrawerNavigationProp<any>;

function AnimatedButton({ children, onPress, isActive }: any) {
  const translateY = useRef(new Animated.Value(isActive ? -10 : 0)).current;
  const scale = useRef(new Animated.Value(isActive ? 1.2 : 1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: isActive ? -10 : 0,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: isActive ? 1.2 : 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isActive]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{
          transform: [{ translateY }, { scale }],
        }}
      >
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default function Homepage() {
  const router = useRouter();
  const navigation = useNavigation<DrawerNavigation>();

  const [active, setActive] = useState('home');

  return (
    <LinearGradient
      colors={['#0B0B12', '#1A1A2E', '#0B0B12']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.openDrawer()}
        />
      </View>

      {/* CARD */}
      <View style={styles.card} />

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>
        
        <AnimatedButton
          isActive={active === 'home'}
          onPress={() => {
            setActive('home');
            router.push('/(tabs)/home');
          }}
        >
          <Feather
            name="zap"
            size={20}
            color={active === 'home' ? '#6366F1' : 'white'}
          />
        </AnimatedButton>

        <AnimatedButton
          isActive={active === 'add'}
          onPress={() => {
            setActive('add');
            router.push('/home');
          }}
        >
          <Ionicons
            name="add"
            size={28}
            color={active === 'add' ? '#6366F1' : 'white'}
          />
        </AnimatedButton>

        <AnimatedButton
          isActive={active === 'livro'}
          onPress={() => {
            setActive('livro');
            router.push('/home');
          }}
        >
          <Ionicons
            name="book-outline"
            size={24}
            color={active === 'livro' ? '#6366F1' : 'white'}
          />
        </AnimatedButton>

        <AnimatedButton
          isActive={active === 'sorteio'}
          onPress={() => {
            setActive('sorteio');
            router.push('/home');
          }}
        >
          <Ionicons
            name="dice"
            size={24}
            color={active === 'sorteio' ? '#6366F1' : 'white'}
          />
        </AnimatedButton>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
  },

  card: {
    flex: 1,
    marginVertical: 30,
    backgroundColor: '#1F2240',
    borderRadius: 30,
    padding: 20,
    elevation: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },

  bottomBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});