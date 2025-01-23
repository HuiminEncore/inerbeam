import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { usePathname } from 'expo-router';

interface HeaderProps {
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
  title?: string;
  leftIconName?: string;
  rightIconName?: string;
  onBackPress?: () => void;
  backLink?: string;
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return isOpen ? (
    <TouchableOpacity
      style={styles.drawerOverlay}
      onPress={onClose}
      activeOpacity={1}
    >
      <View style={styles.drawer}>
        <View style={styles.menuItem}>
          <Link href="/(tabs)/(Espacios)" onPress={onClose} asChild>
            <View style={styles.subMenuItem}>
              <Image
                source={require('../assets/Icons/PNG/Dispositivos_Black.png')}
                style={{
                  width: 16,
                  height: 16,
                  tintColor: Colors.light.gray,
                }}
              />
              <ThemedText style={styles.menuItemText}>Add Device</ThemedText>
            </View>
          </Link>

          <Link href="/(tabs)/(Alertas)" onPress={onClose} asChild>
            <View style={styles.subMenuItem}>
              <Image
                source={require('../assets/Icons/PNG/Alertas_Black.png')}
                style={{
                  width: 16,
                  height: 16,
                  tintColor: Colors.light.gray,
                }}
              />
              <ThemedText style={styles.menuItemText}>Add Alert</ThemedText>
            </View>
          </Link>
        </View>
      </View>
    </TouchableOpacity>
  ) : null;
};

export default function Header({
  title = 'Edisens',
  leftIconName = 'user',
  rightIconName = 'plus',
  onBackPress,
  backLink,
}: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const handleOptionsPress = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <View style={styles.header}>
        {leftIconName === 'back' ? (
          <Link href={backLink as any} asChild>
            <TouchableOpacity onPress={onBackPress}>
              <ThemedView style={styles.backIcon}>
                <FontAwesome
                  name="chevron-left"
                  size={24}
                  color={Colors.light.gray}
                />
                <ThemedText style={styles.backText}>Volver</ThemedText>
              </ThemedView>
            </TouchableOpacity>
          </Link>
        ) : (
          <Link href="/(tabs)/(Ajustes)" asChild>
            <TouchableOpacity>
              <ThemedView style={styles.leftIcon}>
                <FontAwesome name="user" size={24} color={Colors.light.gray} />
              </ThemedView>
            </TouchableOpacity>
          </Link>
        )}
        <ThemedText style={styles.title}>{title}</ThemedText>
        <TouchableOpacity onPress={handleOptionsPress}>
          <ThemedView style={styles.rightIcon}>
            <FontAwesome
              name={rightIconName as any}
              size={24}
              color={Colors.light.gray}
            />
          </ThemedView>
        </TouchableOpacity>
      </View>
      <Drawer isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.gray,
    flex: 1,
    textAlign: 'center',
  },
  leftIcon: {
    backgroundColor: Colors.light.white,
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    backgroundColor: 'transparent',
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    backgroundColor: 'transparent',
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: Colors.light.gray,
    fontWeight: 'bold',
  },
  drawerOverlay: {
    position: 'absolute',
    top: 100,
    right: 24,
    zIndex: 1000,
  },
  drawer: {
    backgroundColor: Colors.light.white,
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 160,
  },
  menuItem: {
    flexDirection: 'column',
    padding: 12,
    gap: 12,
    alignItems: 'flex-start',
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.light.gray,
  },
  subMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuItemIcon: {
    backgroundColor: Colors.light.white,
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
