import { SafetyCard } from "../components/SafetyCard";

export function TrafficSafetyHome() {
  return (
    <section className="text-center space-y-8">
      <div>
        <h2 className="text-3xl font-bold">معًا من أجل طرق أكثر أمانًا</h2>
        <p className="text-gray-600">السلامة المرورية مسؤولية الجميع، حافظ على حياتك وحياة الآخرين.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <SafetyCard title="منطقة أعمال" type="work" />
        <SafetyCard title="عبور مشاة" type="pedestrian" />
        <SafetyCard title="تنبيه خطر" type="warning" />
      </div>
    </section>
  );
}
