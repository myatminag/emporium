import { useMutation } from '@tanstack/react-query';
import { authHttpService } from '../httpService';

type Payload = {
  password: string;
};

export const useResetPw = ({ sessionId }: { sessionId: string }) => {
  return useMutation<any, unknown, Payload>({
    mutationFn: async (payload) => {
      return await authHttpService
        .post(`/admin/reset-password/${sessionId}`, payload)
        .then((res) => res.data);
    },
  });
};
