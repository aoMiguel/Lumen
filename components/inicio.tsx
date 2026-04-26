import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export function Intro() {
  const router = useRouter(); 
  return (
    <LinearGradient
      colors={['#0B0B12', '#1A1A2E', '#0B0B12']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
      }}
    >
      {/* Logo */}
      <Image
        source={require('../assets/img/Logo.png')}
        style={{
          width: 420,
          height: 620,
          resizeMode: 'contain',
        }}
      />

      {/* Botão */}
      <TouchableOpacity
      onPress={() => router.push('/(tabs)/home')}
        activeOpacity={0.7}
        style={{
          marginTop: 40,
          paddingVertical: 14,
          paddingHorizontal: 26,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: '#555',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#ccc', fontSize: 16, marginRight: 6 }}>
          Começar
        </Text>
        <Ionicons name="arrow-forward" size={18} color="#ccc" />
      </TouchableOpacity>
    </LinearGradient>
  );
}