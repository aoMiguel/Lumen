import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function Homepage() {
  
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
    />
    
  );
}