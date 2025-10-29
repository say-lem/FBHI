import Image from "next/image";

const members = [
  {
    name: "Allayee Faizan",
    role: "Chairman",
    image: "/images/members/faizan.jpg",
  },
  {
    name: "Zahoor Alayee",
    role: "Vice Chairman",
    image: "/images/members/zahoor.jpg",
  },
  {
    name: "Ghulam Hassan",
    role: "Secretary",
    image: "/images/members/hassan.jpg",
  },
  {
    name: "Ali Mohd Wagay",
    role: "General Secretary",
    image: "/images/members/wagay.jpg",
  },
  {
    name: "Umer Ali",
    role: "Treasurer",
    image: "/images/members/umer.jpg",
  },
];

export default function MembersSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Board Of Directors</h2>
        {/* <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          The Trust shall comprise an executive body of five members headed by
          the Chairman. Their respective positions are mentioned below.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center">
              <Image
                src={m.image}
                alt={m.name}
                width={100}
                height={100}
                className="rounded-full object-cover border"
              />
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
