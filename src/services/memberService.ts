import {TeamMember} from "@prisma/client";

export async function fetchTeamMember(): Promise<TeamMember[]> {
  const response = await fetch("/api/members");
  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }
  return response.json();
}