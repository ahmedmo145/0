import { AlertTriangle, HardHat, School } from "lucide-react";

const iconMap = {
  warning: AlertTriangle,
  work: HardHat,
  pedestrian: School,
};

export function SafetyCard({ title, type }) {
  const Icon = iconMap[type] || AlertTriangle;
  return (
    <div className="border p-4 rounded-xl shadow hover:shadow-lg transition w-full sm:w-1/3">
      <Icon className="w-8 h-8 mb-2 text-yellow-600" />
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
}
