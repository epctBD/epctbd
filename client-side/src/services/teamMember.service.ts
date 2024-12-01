import {
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
  data: FormData
): Promise<ITeamMemberList[]> => {
  const response = await AXIOS_INSTANCE.patch<ITeamMemberResponse>(
    `/team-member/${id}`,
    data
  );
  return response?.data?.data;
};

export const deleteTeamMember = async (
  id: string
): Promise<ITeamMemberList[]> => {
  const response = await AXIOS_INSTANCE.delete<ITeamMemberResponse>(
    `/team-member/${id}`
  );
  return response?.data?.data;
};
