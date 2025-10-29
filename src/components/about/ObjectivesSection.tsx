import { Plus } from "lucide-react";

const objectives = [
  {
    title: "Women Awareness",
    description:
      "To run or open RTI and women awareness programs, free medical camps, and environmental workshops.",
  },
  {
    title: "Help Masses",
    description:
      "To help the general masses secure information from public authorities through RTI.",
  },
  {
    title: "Aid for Security",
    description:
      "To work for the implementation of the Right to Information Act for the benefit of society.",
  },
  {
    title: "Accountability",
    description:
      "To ensure accountability of public officers and empower the general public to approach authority responsibly.",
  },
];

export default function ObjectivesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">Objectives</h2>
      <p className="text-gray-600 mb-12 max-w-4xl">
        The term <strong>Trustee</strong> shall mean the Trustees of the Right
        to Information Foundation of India at Bemina Bye Pass, committed to the
        secure future of countrymen and to register their efforts in the pages
        of human history.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {objectives.map((obj) => (
          <div
            key={obj.title}
            className="border-l-4 border-(--brand-emerald) pl-6 relative"
          >
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-(--brand-emerald) rounded-full p-1">
              <Plus className="text-white w-3 h-3" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{obj.title}</h3>
            <p className="text-gray-600 text-sm">{obj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
