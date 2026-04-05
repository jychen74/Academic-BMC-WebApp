function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("專業技術營運畫布 (Academic BMC & SWOT)")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function getBmcData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  let bmcObj = {};

  // 從第二列開始讀取，抓取 ID(A欄)、內容(B欄)、標題(C欄)
  for (let i = 1; i < data.length; i++) {
    bmcObj[data[i][0]] = {
      content: data[i][1] || "",
      title: data[i][2] || data[i][0],
    };
  }
  return bmcObj;
}

function saveBmcData(id, content) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      sheet.getRange(i + 1, 2).setValue(content);
      return "Saved";
    }
  }
}
