const SERVICE_KEY =
  '%2BUjyuVkbInMr7Tkmumw5Lb87wtQ1ndK3qPSUaX7TRXySfHboo8MS5A%2BLHgjHzfD5K0BAYcDcu1wIQv2t1HQxGw%3D%3D';

function getFormattedDate() {
  const offset = 1000 * 60 * 60 * 9;
  const today = new Date(new Date().getTime() + offset);
  const ISOString = today.toISOString();
  const formattedDate = ISOString.split('T')[0].split('-').join('');

  return formattedDate;
}

async function getWeatherData() {
  var xhr = new XMLHttpRequest();
  var url =
    'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
  var queryParams =
    '?' + encodeURIComponent('serviceKey') + '=' + SERVICE_KEY; /*Service Key*/
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  queryParams +=
    '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('4'); /**/
  queryParams +=
    '&' +
    encodeURIComponent('dataType') +
    '=' +
    encodeURIComponent('JSON'); /**/
  queryParams +=
    '&' +
    encodeURIComponent('base_date') +
    '=' +
    encodeURIComponent('20240718'); /**/
  queryParams +=
    '&' +
    encodeURIComponent('base_time') +
    '=' +
    encodeURIComponent('0800'); /**/
  queryParams +=
    '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
  queryParams +=
    '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
  xhr.open('GET', url + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      console.log(
        'Status: ' +
          this.status +
          'nHeaders: ' +
          JSON.stringify(this.getAllResponseHeaders()) +
          'nBody: ' +
          this.responseText
      );
    }
  };

  xhr.send('');

  // const url =
  //   'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';

  // const reqUrl = `${url}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${getFormattedDate}&base_time=0500&nx=55&ny=127`;

  // try {
  //   const result = await fetch(reqUrl);
  //   console.log(result);

  //   const data = await result.json();

  //   return data;
  // } catch (err) {
  //   console.log(err);
  // }
}

export { getWeatherData };
