import {instance} from './serviceConfig';

// TODO: Once API is up we need to remove stub call
export const getClasses = () => {
    const REQ_DETAILS = {
        baseURL: '/stub/classes.json', // Currently API is not working due to which we are using stub data
        // url: '/classes/filterByEnterprise/5d838b96f3d6e155bd95692b?visibility=PUBLIC',
        method: 'get'
    };
    return instance(REQ_DETAILS);
};