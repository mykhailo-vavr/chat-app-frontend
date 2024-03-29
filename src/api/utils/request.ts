import { ExtendedApiRoute, RequestConfig } from '@/types';
import { TokenService } from '@/services';
import { apiClient } from '../client';

export const getApiData = async <T = any>(url: ExtendedApiRoute, config?: RequestConfig) => {
  if (!config?.headers?.Authorization) {
    apiClient.defaults.headers.common.Authorization = TokenService.get.access();
  }

  try {
    const res = await apiClient.get<T>(url, config);
    return { data: res.data, res };
  } catch (e) {
    console.error(e);
    return { data: null, res: null };
  }
};

export const postApiData = async <T = any, D = any>(url: ExtendedApiRoute, data: D, config?: RequestConfig) => {
  if (!config?.headers?.Authorization) {
    apiClient.defaults.headers.common.Authorization = TokenService.get.access();
  }

  try {
    const res = await apiClient.post<T>(url, data, config);
    return { data: res.data, res };
  } catch (e) {
    console.error(e);
    return { data: null, res: null };
  }
};
