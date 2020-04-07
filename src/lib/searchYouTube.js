import API_KEY from '../config/youtube.example.js';

var searchYouTube = {
  // TODO

  getAllVideos(options, successCB, errorCB = null) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        part: 'snippet',
        q: options || 'react',
        maxResults: 5,
        key: API_KEY
        //videoEmbeddable: true,
        //type: 'video'
      },
      contentType: 'application/json',
      success: function(data) {
        successCB(data && data.items);
      },
      error: errorCB || function (error) {
        console.error('Youtube: Failed to fetch messages', error);
      }
    });
  }
};
export default searchYouTube;
