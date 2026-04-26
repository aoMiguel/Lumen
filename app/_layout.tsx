import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="(tabs)" />
      <Drawer.Screen name="perfil" />
      <Drawer.Screen name="configuracoes" />
    </Drawer>
  );
}