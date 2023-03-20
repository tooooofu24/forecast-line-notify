function getForecastDate() {
  const url = "https://www.fujitv.co.jp/meza/uranai/data/uranai.json";
  const response = UrlFetchApp.fetch(url).getContentText();
  const json = JSON.parse(response);
  const { date} = json;
  return date
}

function getForecastRankings() {
  const url = "https://www.fujitv.co.jp/meza/uranai/data/uranai.json";
  const response = UrlFetchApp.fetch(url).getContentText();
  const json = JSON.parse(response);
  const { ranking } = json;
  return ranking;
}
