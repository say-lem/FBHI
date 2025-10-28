// lib/hooks/useCampaigns.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useCampaigns() {
  return useQuery<unknown[], Error>({
    queryKey: ['campaigns'],
    queryFn: async () => {
      const { data } = await axios.get('/api/campaigns');
      return data.campaigns as unknown[];
    },
  });
}
