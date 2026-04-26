import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function Homepage() {
  const router = useRouter();
  const navigation = useNavigation<DrawerNavigation>();
  type DrawerNavigation = DrawerNavigationProp<any>;
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
        <TouchableOpacity onPress={() => console.log('Já está na Home')}>
          <Feather name="zap" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
          <Ionicons name="book-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
          <Ionicons name="dice" size={24} color="white" />
        </TouchableOpacity>
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
    paddingTop: 14
  },

  avatar: {
    backgroundColor: '#2ECC71',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarSmall: {
    backgroundColor: '#2ECC71',
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },

  card: {
    flex: 1,
    marginVertical: 30,
    backgroundColor: '#1F2240',
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 20,

    // sombra Android
    elevation: 10,

    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },

  floatingButton: {
    position: 'absolute',
    top: -25,
    right: 20,
    backgroundColor: '#2ECC71',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});