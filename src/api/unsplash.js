import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID vmRmyTsKk9aUJ5suK3o_Ce_KLgmJpgJJ8F7e3xQRbN0'
  }
});