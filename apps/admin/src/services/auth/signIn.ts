import { authHttpService } from '../httpService';

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
  return await authHttpService
    .post('/admin-login', data)
    .then((res) => res.data);
};
