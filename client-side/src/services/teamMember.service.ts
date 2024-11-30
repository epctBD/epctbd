import {
  ITeamMember,
  ITeamMemberList,
  ITeamMemberResponse,
} from "@/models/teamMember.model";
import AXIOS_INSTANCE from "./axiosInstance";

export const getTeamMembers = async (): Promise<ITeamMemberList[]> => {
  const response = await AXIOS_INSTANCE.get<ITeamMemberResponse>("team-member");
  return response?.data?.data;
};

export const createTeamMember = async (
  data: FormData
): Promise<ITeamMemberList[]> => {
  const response = await AXIOS_INSTANCE.post<ITeamMemberResponse>(
    "team-member",
    data
  );
  return response?.data?.data;
};

export const updateTeamMember = async (
  id: string,
  data: Partial<ITeamMember>
): Promise<ITeamMember> => {
  const response = await AXIOS_INSTANCE.put(`/team-member/${id}`, data);
  return response.data;
};

export const deleteTeamMember = async (id: string): Promise<void> => {
  await AXIOS_INSTANCE.delete(`/team-member/${id}`);
};
