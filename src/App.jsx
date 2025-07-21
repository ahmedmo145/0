import { Header } from "./components/Header";
import { TrafficSafetyHome } from "./pages/TrafficSafetyHome";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="p-6">
        <TrafficSafetyHome />
      </main>
    </div>
  );
}
