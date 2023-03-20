/**
 * LINEに通知を送る
 */
function sendMessage(message){
  const token = LINE_NOTIFY_ACCESS_TOKEN
  const url = 'https://notify-api.line.me/api/notify';

  const options ={
    "method"  : "post",
    "payload" : {"message": message},
    "headers" : {"Authorization":"Bearer " + token}
  };

  UrlFetchApp.fetch(url, options);
}