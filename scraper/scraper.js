require("dotenv").config();
const tr = require("tor-request");
const cheerio = require("cheerio");
const Pastes = require("./pasteModel");
const mongoose = require("./mongoose");

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
          const _id = btn.match("onion/(.*)")[1];
          const author = $(".col-sm-6").text().match("by (.*) at")[1].trim();
          const title = $("h4").text().trim();
          const content = $(".text").text();
          const date = new Date(
            $(".col-sm-6").text().match("at (.*)\n")[1].trim()
          );
          resolve({ _id, author, title, content, date });
        } else {
          reject(error);
        }
      });
    });
  });
}

async function getDB() {
  const scrape = await scrapeAll();
  const pendingData = await getData(scrape);
  const data = await Promise.all(pendingData);
  return data;
}

// setInterval(() => {
getDB().then((db) => {
  console.log("start mongo");
  Pastes.insertMany(db)
    .then(() => console.log("the data saved successfully"))
    .catch((err) =>
      console.log("there was an error during saving data: " + err.message)
    );
});
// }, 120000);
