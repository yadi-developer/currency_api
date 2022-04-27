const get_data = require("./config/get_data");
const loader = require("./config/short_cut");
const express = require("express");
const app = express();
const port = 3000;

const url =
  "https://www.bi.go.id/en/statistik/informasi-kurs/transaksi-bi/Default.aspx";

//console.log(get_data(url));

app.get("/", (req, res) => {
  (async () => {
    try {
      const data = await get_data(url);
      res.send({
        author: "Yadi",
        github: {
          profil: "https://github.com/yadi-developer",
          portfolio: "https://yadi-developer.github.io",
        },
        data: loader(url),
      });
    } catch (e) {
      /* handle error */
      console.log(e);
    }
    //res.send()
  })();
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
