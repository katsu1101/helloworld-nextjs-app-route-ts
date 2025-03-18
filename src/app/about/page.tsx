"use client"; // クライアントコンポーネント

import {TeamMember}          from "@prisma/client";
import {useEffect, useState} from "react";

import {fetchTeamMember} from "@/services/memberService";

import AboutHero    from "./components/AboutHero";
import AboutDetails from "./components/AboutDetails";

export default function AboutPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  useEffect(() => {
    fetchTeamMember().then(setMembers);
  }, []);

  return (
    <div>
      <AboutHero/>
      <AboutDetails members={members}/>
    </div>
  );
}
