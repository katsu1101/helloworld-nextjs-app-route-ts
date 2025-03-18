"use client";

import {useEffect, useState} from "react";
import {useParams}           from "next/navigation";
import Image                 from "next/image";

import {TeamMember} from "@prisma/client";


export default function MemberPage() {
  const params = useParams();
  const memberId = params.memberId as string;

  const [member, setMember] = useState<TeamMember | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMember() {
      try {
        const response = await fetch(`/api/members/${memberId}`);
        if (!response.ok) {
          setError(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMember(data);
      } catch (error) {
        setError(`Member not found or an error occurred. ${error}`);
      }
    }

    if (memberId) {
      fetchMember().catch();
    }
  }, [memberId]);

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gray-900 text-white">
        <p className="text-red-400 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="max-w-sm w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <Image
          src={member.image}
          alt={member.name}
          className="mx-auto mb-4 rounded-full border-4 border-gray-600"
          width={128}
          height={128}
        />
        <h1 className="text-2xl font-bold">{member.name}</h1>
        <p className="text-gray-400">{member.role}</p>
      </div>
    </div>
  );
}
