export interface ITeamMember {
  name: string;
  position: string;
  isExTeam: boolean;
  display_picture: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface ITeamMemberList {
  _id: string;
  name: string;
  position: string;
  isExTeam: boolean;
  display_picture: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface ITeamMemberResponse {
  message: string;
  data: ITeamMemberList[];
  success: boolean;
}
