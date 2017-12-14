var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'f0KEVcA9DPUjcjccfFaEBteLu',
  consumer_secret: 'Up4h6hBnhfWu1tQO2e63WFyjpP8XSbCC6kiRHKVb5mmJVJ9wr2',
  access_token_key: '940490339210502144-k4JA6w2N3ucXwA30ZmFDd53KQZIpneV',
  access_token_secret: 'JY5RZ8J6qlrywdisXDYCDktP2FV1RVAX6J3C90ZOpjSWI'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});