/* Inspired by: https://github.com/AH72KING/Instagram-scraping/blob/master/instagram_hashtag_images.php */

const https = require('https');

const getContent = function (url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err))
  })
};

function scrape_insta_hash(tag) {
  return new Promise((resolve, reject) => {
    getContent(`https://www.instagram.com/explore/tags/${tag}/`)
      .then(insta_source => {
        let shards = insta_source.split('window._sharedData = ');
        let insta_json = shards[1].split(';</script>');
        let insta_array = JSON.parse(insta_json[0]);

        // let images = insta_array['entry_data']['TagPage'][0]['graphql']['hashtag']['edge_hashtag_to_media']['edges'].map(x => x['node']['display_url']);
        let images = insta_array['entry_data']['TagPage'][0]['graphql']['hashtag']['edge_hashtag_to_media']['edges'];

        resolve(images);
      })
      .catch(err => reject(err));
  })
}

scrape_insta_hash('water').then(images => console.log(images));