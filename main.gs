function main() {
  const date = getForecastDate();
  // 今日の占いでなければスキップする
  if(new Date(date).toDateString() != new Date().toDateString()){
    return;
  }
  const rankings = getForecastRankings()
  let message = ''; // 送信メッセージ
  for(user of users){
    const { name, sign } = user;
    const ranking = rankings.find(ranking => ranking.name == sign);
    const { rank, text, point } = ranking;
    const additionalMessage = `\n\n${name}\n${sign} 【第${rank}位】\n${text.replaceAll('<br>','')}\nラッキーアイテム：${point}`;
    message += additionalMessage;
  }
  sendMessage(message)
}
