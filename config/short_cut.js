const cheerio = require("cheerio");

function loader(berkas) {
  const $ = cheerio.load(berkas);
  const selector = (x) =>
    $(
      `#ctl00_PlaceHolderMain_g_6c89d4ad_107f_437d_bd54_8fda17b556bf_ctl00_GridView1 table tbody tr:nth-child(${x})`
    ).html();

  const sli = (x, i) =>
    $(
      `#ctl00_PlaceHolderMain_g_6c89d4ad_107f_437d_bd54_8fda17b556bf_ctl00_GridView1 table tbody tr:nth-child(${x}) td:nth-child(${i})`
    ).html();

  var store = [];

  for (let x = 1, len = 26; x < len; x++) {
    var slip = {
      cur: sli(x, 1),
      value: sli(x, 2),
      sell: sli(x, 3),
      buy: sli(x, 4),
    };
    //for (let i = 1, p = 5; i < p; i++) {
    //slip.push({
    //cur: i == 1 ? sli(x, i) : "",
    //value: i == 2 ? sli(x, i) : "",
    //sell: i == 3 ? sli(x, i) : "",
    //buy: i == 4 ? sli(x, i) : "",
    //});
    //}
    store.push(slip);
  }

  return store;
}

module.exports = loader;
