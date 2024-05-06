import { httpService } from '../http-service';

type AdminSignIn = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
  refreshToken: string;
  userId: string;
  email: string;
  exp: number;
};

export const signInService = async (
  data: AdminSignIn,
): Promise<SignInResponse> => {
  const res = await httpService.post('/auth/admin-login', data);
  return res.data;
};
