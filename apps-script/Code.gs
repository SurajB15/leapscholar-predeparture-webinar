const SHEET_NAME = "Registrations";
const HEADERS = ["Timestamp","Name","Email","Phone","Accommodation Status","Other Services Needed","Client Timestamp"];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || "{}");
    const required = ["name","email","phone","accommodation"];
    const missing = required.filter(k => !String(d[k] || "").trim());
    if (missing.length) return out({status:"error",message:"Missing required fields."});
    if (!/^[6-9]\d{9}$/.test(String(d.phone).trim())) return out({status:"error",message:"Invalid phone number."});

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1,1,1,HEADERS.length).setFontWeight("bold");
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(),
      clean(d.name),
      clean(d.email).toLowerCase(),
      clean(d.phone),
      clean(d.accommodation),
      clean(d.services),
      clean(d.timestampClient)
    ]);
    return out({status:"success"});
  } catch (err) {
    return out({status:"error",message:String(err)});
  }
}
function doGet(){return out({status:"ok",message:"Registration endpoint is live."});}
function clean(v){return v == null ? "" : String(v).trim();}
function out(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
