export interface TeamMember {
  id: number
  name: string;
  role: string;
  image: string;
}

export interface AboutDetailsProps {
  members: TeamMember[];
}
