const API_BASE_URL = window.SUPPORT_API_BASE_URL || 'http://localhost:4000';

const createSupportMessage = async (payload) => {
  return axios.post(API_BASE_URL + '/support-messages', payload);
};

window.supportService = {
  createSupportMessage,
};
