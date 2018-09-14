const rp = require('request-promise');

const postId = '1867603531034541051';

const options = {
    method: 'POST',
    uri: `https://www.instagram.com/web/likes/${postId}/like/`,
    headers: {
		// ":authority": "www.instagram.com",
		// ":method": "POST",
		// ":path": "/web/likes/1867603531034541051/like/",
		// ":scheme": "https",
		"accept": "*/*",
		"accept-encoding": "gzip, deflate, br",
		"accept-language": "en-US,en;q=0.9",
		"cache-control": "no-cache",
		"content-length": 0,
		"content-type": "application/x-www-form-urlencoded",
		"cookie": 'mid=W5FXlAAEAAE_EnMBW_s6VcRgvZpe; mcd=3; rur=FTW; csrftoken=NzsHIOJ0TIpV4IL0KUY35AkEmLvSU0jt; shbid=2829; ds_user_id=6141105940; sessionid=IGSC36de5828931be83c96c21f0d74ade388268f173c725be910aad1238b6f343a7a%3AJnIcDf0azZsqmbXJcRqeIsnr38aeqhPk%3A%7B%22_auth_user_id%22%3A6141105940%2C%22_auth_user_backend%22%3A%22accounts.backends.CaseInsensitiveModelBackend%22%2C%22_auth_user_hash%22%3A%22%22%2C%22_platform%22%3A4%2C%22_token_ver%22%3A2%2C%22_token%22%3A%226141105940%3Adwup7zTcgCGbMFFt8Eeku9eeuraGlykl%3Aa4599bb35a13b0f17a35a6afd7396061ce40ca9460f1f24aec5ad86c85369009%22%2C%22last_refreshed%22%3A1536876337.3739323616%7D; csrftoken=NzsHIOJ0TIpV4IL0KUY35AkEmLvSU0jt; shbts=1536876694.1230996; urlgen="{\"24.46.176.120\": 6128}:1g0Zpn:EqgRQJ8jjx0m1zRdW6BFFnFOwnU"',
		"origin": "https://www.instagram.com",  // can change this and request still works
		"pragma": "no-cache",
		"referer": "https://www.instagram.com/", // can change this and request still works
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
		"x-csrftoken": "NzsHIOJ0TIpV4IL0KUY35AkEmLvSU0jt",
		"x-instagram-ajax": "2187d49e65cd",  // everliker sets this to 1
		"x-requested-with": "XMLHttpRequest"
    }
};

rp(options)
.then(function(response) {
	console.log('RESPONSE HERE: ', response);
});







// const newCookie = `
// mid=W5FXlAAEAAE_EnMBW_s6VcRgvZpe
// mcd=3
// csrftoken=V5zDniUdZvJ9C5yvh1igWzZp9kYGQUHg
// shbid=10867
// ds_user_id=6127775275
// sessionid=IGSCde74b02dd58c417b12f99dd2312a6c1e16a1c6be32b8f12752f507249f3f3692%3AAOrsAHKPfw74wwqZczUjWjuRRYzGkWyo%3A%7B%22_auth_user_id%22%3A6127775275%2C%22_auth_user_backend%22%3A%22accounts.backends.CaseInsensitiveModelBackend%22%2C%22_auth_user_hash%22%3A%22%22%2C%22_platform%22%3A4%2C%22_token_ver%22%3A2%2C%22_token%22%3A%226127775275%3Ai8dg2w38M4N4Gkef6h9MZYQpPClRD2NQ%3A8860ba18bce86e45d6f365b440e83083376e53de5484bc60c6589127ea9c829c%22%2C%22last_refreshed%22%3A1536893758.7402291298%7D
// csrftoken=V5zDniUdZvJ9C5yvh1igWzZp9kYGQUHg
// rur=ATN
// urlgen="{\"24.46.176.120\": 6128}:1g0fEU:cbxNiEs31jI6gDa-wTlk84yCC3o"
// `;





