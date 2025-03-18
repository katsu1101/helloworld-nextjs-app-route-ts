"use client";

import { useEffect, useState } from "react";
import { TeamMember }          from "@/types/team";
import Link                    from "next/link";
import Image                   from "next/image";

export default function MembersPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch("/api/members");
        if (!response.ok) {
          setError(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        setError(`Failed to fetch members. ${error}`);
      }
    }

    fetchMembers().catch();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gray-900 text-white">
        <p className="text-red-400 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Team Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Link key={member.id} href={`/members/${member.id}`} className="group">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 rounded-full border-4 border-gray-600"
                width={128}
                height={128}
              />
              <h2 className="text-xl font-bold text-center">{member.name}</h2>
              <p className="text-gray-400 text-center">{member.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
