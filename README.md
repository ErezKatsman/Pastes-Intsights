# Deep-Web-Scraper

In this project, i built Deep web [scraper](https://en.wikipedia.org/wiki/Web_scraping) web application. 
This app scrapes all the pastes from onion paste site. This site contains a lot of criminal activity, ranging from illegal hacking and data theft attempts, through hitmans and other criminal services for sell and all the way to links to child pornography sites. This site resides on the darknet, and is only accessible through the [TOR network](https://en.wikipedia.org/wiki/Tor_(network)) that provides the cyber criminals with anonymity. After setting up your TOR access, you’ll be able to access the site on: http://nzxj65x32vh2fkhk.onion/all.

## construction
micro-services using docker compose:
- backend - backend container.
- client - clinet container.
- mongo - mongoDB container (from Docker Hub).
- torproxy - Get access the tor network using docker and opens an http proxy (from Docker Hub). 
- scraper - scrape new data every 2 minutes with interval. Every 2 minutes the data insert into the mongo database.

## Setup & Instrucions
1. Make sure you have Docker installed. 
2. Clone this repository
3. Open the terminal in the repo directory
4. run `docker compose up` and wait for the process to finish.
5. In your browser, go to http://localhost/. Enjoy :)
