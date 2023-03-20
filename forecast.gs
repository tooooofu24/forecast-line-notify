function fetchForecastData() {
  const url = "https://www.fujitv.co.jp/meza/uranai/data/uranai.json";
  const response = UrlFetchApp.fetch(url).getContentText();
  const json = JSON.parse(response);
  const { date, ranking } = json;
  return { date, rankings: ranking };
}