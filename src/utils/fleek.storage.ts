import { get, upload, streamUpload } from '@fleekhq/fleek-storage-js';

export const getFile = async (key) => {
  return await get({
    apiKey: process.env.FLEEK_API_KEY,
    apiSecret: process.env.FLEEK_API_SECRET,
    key,
    getOptions: ['data', 'bucket', 'key', 'hash', 'publicUrl']
  });
};

export const uploadFile = async (data, key) => {
  return await upload({
    apiKey: process.env.FLEEK_API_KEY,
    apiSecret: process.env.FLEEK_API_SECRET,
    key,
    data
  });
};

export const uploadStreamFile = async (data, key) => {
  return await streamUpload({
    apiKey: process.env.FLEEK_API_KEY,
    apiSecret: process.env.FLEEK_API_SECRET,
    key,
    data
  });
};
