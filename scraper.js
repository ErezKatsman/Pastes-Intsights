const tr = require("tor-request");
const cheerio = require("cheerio");
// const { match } = require("assert/strict");

function pageScrape(page) {
  return new Promise((resolve, reject) => {
    tr.request(
      `http://nzxj65x32vh2fkhk.onion/all?page=${page}`,
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const btns = [];
          $(".btn-success").each((i, el) => {
            btns.push($(el).attr("href"));
          });
          resolve(btns);
        } else {
          reject(error);
        }
      }
    );
  });
}

async function scrapeAll(page = 1, btns = []) {
  try {
    console.log(page);
    const currentBtnsPage = await pageScrape(page);
    const newArrBtns = [...btns, ...currentBtnsPage];
    return await scrapeAll(page + 1, newArrBtns);
  } catch (err) {
    console.log(err);
    return btns;
  }
}

function getData(btns) {
  return btns.map((btn) => {
    return new Promise((resolve, reject) => {
      tr.request(btn, (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const author = $(".col-sm-6").text().match("by (.*) at")[1].trim();
          const title = $("h4").text().trim();
          const content = $(".text").text();
          const date = new Date(
            $(".col-sm-6").text().match("at (.*)\n")[1].trim()
          );
          resolve({ author, title, content, date });
        }
      });
    });
  });
}

scrapeAll().then((data) =>
  Promise.all(getData(data)).then((res) => console.log(res))
);
