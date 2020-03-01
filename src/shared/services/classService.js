import {instance} from './serviceConfig';

export const getClasses = () => {
    const REQ_DETAILS = {
        url: '/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC',
        method: 'get'
    };
    return instance(REQ_DETAILS);
};