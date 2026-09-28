import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>7.540</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>75% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen de hoy</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="520" label="Calorías" />
        <StatCard icon="⏱" value="48 min" label="Actividad" />
        <StatCard icon="❤️" value="72" label="Pulsaciones" />
        <StatCard icon="📍" value="5,6 km" label="Distancia" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Carrera" detail="5,2 km · 28 min" />
      <Activity title="Bicicleta" detail="12 km · 42 min" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010911',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#64748b',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#0e6011',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#94a3b8',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#cbd5e1',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#374151',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '75%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  percentage: {
    color: '#cbd5e1',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
  },
  statLabel: {
    marginTop: 4,
    color: '#64748b',
  },
  activity: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  activityDetail: {
    marginTop: 4,
    color: '#64748b',
  },
});