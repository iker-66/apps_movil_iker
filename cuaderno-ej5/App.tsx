import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://imgs.search.brave.com/Hpe9d5By1hVMGpFn4e9tcJ8BOb2lkWURKojLXFW1UI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYW0u/ZWxjb3J0ZWluZ2xl/cy5lcy9wcm9kdWN0/by93d3ctMDAxMDM4/NTQ1ODU1NDIxLTA3/LmpwZw' }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>TECNOLOGÍA</Text>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#1e3f60',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 20,
  },
  category: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});