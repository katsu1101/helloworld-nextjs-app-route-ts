import {AboutDetailsProps} from "@/types/team";
import Image from "next/image";

export default function AboutDetails({members}: AboutDetailsProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">私たちのチーム</h2>
        <p className="mt-4 text-gray-600">私たちは、それぞれの分野で専門性を持つプロフェッショナルです。</p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6 px-4">
        {members.map((member, index) => (
          <a key={index}
             href={`/members/${member.id}`}
               className="w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
            <Image
              src={member.image} alt={member.name} className="w-full h-40 object-cover"
              width={128} height={128}
            />

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
