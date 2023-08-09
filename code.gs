function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function doMail(name, email, sub, body) {
  let m = MailApp.sendEmail({
    to: email,
    subject: "Geri bildiriminiz için teşekkür ederiz.",
    htmlBody: "Değerli " + name + ", bize '" + sub + "' konusu hakkında geri bildirimde bulunduğunuz için teşekkür ederiz. Gerekirse bu e-posta adresi üzerinden sizinle iletişime geçebiliriz."
  })
  m;
}

function doSheets(name, email, sub, body) {
  let url = "https://docs.google.com/spreadsheets/d/1xnINy6Rc9vAjxHRTkvrMX-l7NfkRKPgszEoaVnN5mKY/edit#gid=0";
  let ss = SpreadsheetApp.openByUrl(url);
  let s = ss.getSheetByName("GeriBildirimler");
  s.appendRow([name, email, sub, body]);
}
