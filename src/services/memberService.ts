import {TeamMember} from "@/types/team";

export async function fetchTeamMember(): Promise<TeamMember[]> {
  const response = await fetch("/api/members");
  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }
  return response.json();
}