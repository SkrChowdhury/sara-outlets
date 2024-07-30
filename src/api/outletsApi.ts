// api.js
import axios from 'axios';

const apiUrl =
  'https://prod.saraemart.com/api/Outlet/GetOutletAddress?getAll=Y';
export const fetchOutlets = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data; // Assuming data is an array of outlets
  } catch (error) {
    console.error('Failed to fetch outlets:', error);
    return [];
  }
};
