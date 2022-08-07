import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv/config';

const blogs = express();
const { DEV_TO_API_KEY } = process.env;

blogs.get('/published', async (req, res) => {
  const url = 'https://dev.to/api/articles/me/published';
  try {
    const response = await axios({url, headers: {'api-key': DEV_TO_API_KEY}});
    res.send(response.data);
  } catch (error) { 
    console.log(error);
    res.status(500).send(error);
  }
});




export default blogs;
