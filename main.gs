function main() {
  const { date, rankings  } = fetchForecastData();
  // 今日の占いでなければスキップする
  if(new Date(date).toDateString() != new Date().toDateString()){
    return;
  }
  let message = ''; // 送信メッセージ
  for(user of users){
    const { name, sign, hideIfUnlucky } = user;
    const ranking = rankings.find(ranking => ranking.name == sign);
    let { rank, text, point } = ranking;
    // 7位以下かつhideIfUnluckyがTrueの場合、順位を表示しない
    if(rank >= 7 && hideIfUnlucky){
      rank = "🙊";
    }
    // brタグを消す
    text = text.replaceAll('<br>','');
    // 送信メッセージ
    const additionalMessage = `\n\n${name}\n${sign} 【第${rank}位】\n${text}\nラッキーアイテム：${point}`;
    message += additionalMessage;
  }
  sendMessage(message)
}
