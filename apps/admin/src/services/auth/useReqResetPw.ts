import { useMutation } from '@tanstack/react-query';

import { authHttpService } from '../httpService';

export type Payload = {
  email: string;
};

export const useReqResetPw = () => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return await authHttpService
        .post('/admin/reset-password', payload)
        .then((res) => res.data);
    },
  });
};
