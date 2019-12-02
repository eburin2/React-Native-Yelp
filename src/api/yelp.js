import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer nPiWdj-g_R1NjsO7FrYI5pyrTBSNStcb_SUL-YbxNZ4zaN_64XaRYufDDJNfxzC6xGZOtR7BG3z5AvIUzGcBQIvfDUOoxpoiJy_rGc_g0mokAIUo46BFLF2dfdjZXXYx'
  }
});
