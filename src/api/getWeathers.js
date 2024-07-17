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
  const url =
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/

  const reqUrl = `${url}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${getFormattedDate}&base_time=0500&nx=55&ny=127`;

  const response = await fetch(reqUrl);
  const result = await response;

  return result;
}

export { getWeatherData };
