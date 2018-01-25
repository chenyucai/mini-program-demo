import {wxRequest} from '../utils/http';

/**
 * 获取用户信息
 */
export const getUserInfo = () => wxRequest('/api/user/info/search');

/**
 * 获取机构信息
 */
export const getAgencyInfo = () => wxRequest('/api/home/agency/settings');

/**
 * 获取机构模块
 */
export const getAgencyModule = () => wxRequest('/api/home/module/list');
