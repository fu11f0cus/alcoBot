const TelegramBot = require('node-telegram-bot-api');
const token = '5981307609:AAHFF5HiBXWAvrEUy0q-lcKgCT_hu9yWBvo';
const alcobot = new TelegramBot(token, { polling: true });
/*
*********************
/\/\/\/\/\/\/\/\/\/\/\
.                     \
Made by fucksociety//  \
Idea - Dmytro(bezdar)   \
.                       /
Enjoy!                 /
.                     /
\/\/\/\/\/\/\/\/\/\/\/
**********************
23.01.2023 - started
12.03.2023 - finished
*/

//welcome text
const wlc1 = 'First off, I need some info about you.';
const wlc2 = 'Tell me how much money you have to buy alco(zl)';
const wlc3 = 'Tell me how many people with you';
const wlc4 = 'Tell me how much do you want a drink(1. Low procent alco; 2. High procent alco;)';
const wlc5 = 'Example of usage: /money 300; /people 3; /drinkmode 2; /smoke cigarette';
const wlc6 = 'After you write all, use "/info" to continue';
const wlc7 = 'Tell me smoke you or not. If you smoke, tell me what - cigarettes or heets(/smoke)';

//alcohol

const shots = [ 
  {name: 'Death', price: 5}, {name: 'Germany', price: 4},
  {name: 'Ukraine', price: 6}, {name: 'roflanPominki', price: 7}
];
//console.log('shotsprice - ' + pricesum(shots));//22
const beer = [
  {name: 'Corona', price: 5}, {name: 'Zubr', price: 3},
  {name: 'Tyskie', price: 3}, {name: 'Kasztelan', price: 2}, 
  {name: 'Jasne Lomza', price: 3}, {name: 'Carlsberg', price: 3}, 
  {name: 'Tyskie Gronie', price: 4}, {name: 'Somersby', price: 5}
];
//console.log('beerprice - ' + pricesum(beer));//28
const vodka = [ 
  {name: 'Absolut', price: 58}, {name: 'Stock', price: 33},
  {name: 'Wyborowa', price: 50}, {name: 'Ostoya', price: 60}, 
  {name: 'Bols', price: 30}, {name: 'PanTadeusz', price: 32}, 
  {name: 'Zoladkowa', price: 27}, {name: 'Soplica', price: 38}, 
  {name: 'Zubrowka', price: 36}, {name: 'Bielicka', price: 25}
];
//console.log('vodkasum - ' + pricesum(vodka));//389
const whitewine = [
  {name: 'Apertino Free', price: 20}, {name: 'Martini Bianco', price: 28}, 
  {name: 'Freixenet', price: 25}, {name: 'Greyrock reserve', price: 37},
  {name: 'Cono Sur Chardonney', price: 30}, {name: 'Hans Greyl Sauvignon Blane', price: 20}, 
  {name: 'Cin&Cin Bianco', price: 20}, {name: 'Aperitif Totino', price: 19},
  {name: 'Carlo Rossi Refresh Sweet Citrus', price: 24}, {name: 'Carlo Rossi Refresh Pineapple coconut', price: 24}
];
//console.log('whitewinesum - ' + pricesum(whitewine));//247
const redwine = [
  {name: 'Chianti Poggio Al Sale', price: 20}, {name: 'Matrini Rosso', price: 28},
  {name: 'Martini Fiero', price: 28}, {name: 'Astrale', price: 25},
  {name: 'Masseria Trajone Negroamaro', price: 20}, {name: 'Primitivo di Manduria', price: 25},
  {name: 'Faunnus Primitivo', price: 30}, {name: 'Monte da Serra', price: 12},
  {name: 'Cono Sur Carmenere', price: 30}, {name: 'Witosha', price: 20}, 
  {name: 'Kadarita Soleil', price: 18}, {name: 'Monte Santi Frizzante Watermelon', price: 18},
  {name: 'Carlo Rossi Refresh Pomegranate', price: 24}, {name: 'Freixenet', price: 25}
];
//console.log('redwinesum - ' + pricesum(redwine));//323
const whisky = [
  {name: 'GoldenTouch', price: 38}, {name: 'TheFamousGrouse', price: 65}, 
  {name: 'Label5', price: 90}, {name: 'JimBeam Red Stag', price: 70},
  {name: 'Ballantines', price: 50}, {name: 'Grants triple wood', price: 60},
  {name: 'JimBeam White', price: 80}, {name: 'JackDaniels 1.5l', price: 139},
  {name: 'JackDaniels 1l', price: 100}, {name: 'Ballantines finest', price: 53},
  {name: 'Johnie Walker BL', price: 90}, {name: 'Jameson', price: 70},
  {name: 'Tullamore', price: 60}
];
//console.log('whiskysum - ' + pricesum(whisky));//965
const highprocent = [
  {name: 'Jagermeister', price: 78}, {name: 'Barmanska', price: 21}, 
  {name: 'Likier Saska', price: 27}, {name: 'Zoladkowa Gorzka Rzeska', price: 28},
  {name: 'Lubelska', price: 26}, {name: 'Likier Krupnik', price: 25},
  {name: 'Captain Morgan Original Spiced Gold', price: 50},
  {name: 'Bacardi Carta Negra', price: 50}, {name: 'Bacardi Coconut', price: 50},
  {name: 'Gin Lubuski', price: 40}, {name: 'Gin Seagrams', price: 50},
  {name: 'Bacardi Carta Planca', price: 50}, {name: 'Bacardi Arejo', price: 80},
  {name: 'Likier Baileys', price: 55}, {name: 'Likier Krupnik', price: 25}, 
  {name: 'Likier Dalkowski', price: 35}, {name: 'Likier Sheridans', price: 47},
  {name: 'Brandy Stock', price: 60}, {name: 'Nalewka Babuni', price: 26},
  {name: 'Aperitif Aperol', price: 60}
];
//console.log('highprocentsum - ' + pricesum(highprocent));//883
const cigarettes = [
  {name: 'Camel', price: 17}, {name: 'Chesterfield', price: 14},
  {name: 'Davidoff', price: 19}, {name: 'LM', price: 17},
  {name: 'LD', price: 14}, {name: 'Marlboro', price: 17},
  {name: 'Pall Mall', price: 14}, {name: 'Rothmans', price: 14},
  {name: 'Vogue', price: 18}, {name: 'Winston', price: 14},
];
//console.log('cigarettesum - ' + pricesum(cigarettes));//158
const heets = [
  {name: 'Heets Bronze', price: 16}, {name: 'Heets Silver', price: 16},
  {name: 'Heets Amber', price: 16}, {name: 'Heets SIenna', price: 16},
  {name: 'Heets Yellow', price: 16}, {name: 'Heets Blue', price: 16},
  {name: 'Heets Turquoise', price: 16}, {name: 'Heets Purple', price: 16},
  {name: 'Heets Cool Jade', price: 16}, {name: 'Heets Forest Green', price: 16},
];
const alcohol = [shots, beer, whitewine, redwine, vodka, highprocent, whisky];

//useful functions

//sum of prices
function pricesum(arr) {
  let prices = arr.map(xz => xz.price);
  return prices.reduce((one, two) => one + two, 0);
}

//random value
function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//sort by price
function pricesort(arr) {
  return arr.sort((a, b) => a.price > b.price ? 1 : -1); 
}
//sum of array
function sum(arr) {
  return arr.reduce((summ, current) => summ + current, 0);
}
//filter by price
let check = whitewine.filter(price => price.price > 30);

//show all prices
function prices(arr) {
  arr.forEach(xz => {
    xz.price;
  })
}
// min/max
function min(arr) {
  return Math.min(...arr);
}
function max(arr) {
  return Math.max(...arr);
}

// 18.02.2023 21:50 - new feature for bot
alcobot.on('message', (msg) => {
  const txt = msg.chat.id;
  let rnd;
  if(msg.text.toLowerCase() == 'whitewine') {
    rnd = rand(0, whitewine.length - 1);
    alcobot.sendMessage(txt, `name = ${whitewine[rnd].name}, price = ${whitewine[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'redwine') {
    rnd = rand(0, redwine.length - 1);
    alcobot.sendMessage(txt, `name - ${redwine[rnd].name}, price - ${redwine[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'beer') {
    rnd = rand(0, beer.length - 1);
    alcobot.sendMessage(txt, `name - ${beer[rnd].name}, price - ${beer[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'shots') {
    rnd = rand(0, shots.length - 1);
    alcobot.sendMessage(txt, `name - ${shots[rnd].name}, price - ${shots[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'vodka') {
    rnd = rand(0, vodka.length - 1);
    alcobot.sendMessage(txt, `name - ${vodka[rnd].name}, price - ${vodka[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'whisky') {
    rnd = rand(0, whisky.length - 1);
    alcobot.sendMessage(txt, `name - ${whisky[rnd].name}, price - ${whisky[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'highprocent') {
    rnd = rand(0, highprocent.length - 1);
    alcobot.sendMessage(txt, `name - ${highprocent[rnd].name}, price - ${highprocent[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'cigarettes') {
    rnd = rand(0, cigarettes.length - 1);
    alcobot.sendMessage(txt, `name - ${cigarettes[rnd].name}, price - ${cigarettes[rnd].price}zl`);
  }
  if(msg.text.toLowerCase() == 'heets') {
    rnd = rand(0, heets.length - 1);
    alcobot.sendMessage(txt, `name - ${heets[rnd].name}, price - ${heets[rnd].price}zl`);
  }

  if(msg.text.toLowerCase() == 'рофлинка') {
    alcobot.sendMessage(txt, ` 
    Heets - ${heets[0].name}, price - ${heets[0].price}zl,\nBeer - ${beer[0].name}, price - ${beer[0].price}zl
    `);
  }
})

alcobot.onText(/\/description (.+)/, (msg, name) => {
  const txt = msg.chat.id;
  if(name[1] == 'львовское')
    alcobot.sendMessage(txt, 'Лучшее пиво в мире');
  if(name[1] == 'корона') 
    alcobot.sendMessage(txt, 'Топ 2 пиво');
})

alcobot.onText(/\/guide/, (msg) => {
  const txt = msg.chat.id;
  alcobot.sendMessage(txt, `
  Here is list of all commands:
  1 - /list
  2 - /start
  3 - /money
  4 - /people
  5 - /drinkmode
  6 - /smoke
  7 - /info
  8 - /guide
  9 - you can write any type of alcohol and I'll give you a random alco(whitewine, redwine, vodka etc.)
  10 - you can play a rock/paper/scissors with me! Try to write камень, ножницы or бумага to start playing

  list of available alcohol: 
  1 - whitewine
  2 - redwine
  3 - shots
  4 - beer
  5 - vodka
  6 - whisky
  7 - highprocent
  8 - cigarettes
  9 - heets

  you can see more about any type of alcohol by writing /list
  example: /list redwine
  `)
})

alcobot.onText(/\/list (.+)/, (msg, name) => {
  let nm, pr;
  const txt = msg.chat.id;
  if(name[1] == 'beer') {
    for(let i = 0; i < beer.length; i++) {
      alcobot.sendMessage(txt, `name - ${beer[i].name}, price - ${beer[i].price}zl`)
    }
  }
  if(name[1] == 'shots') {
    for(let i = 0; i < shots.length; i++) {
      alcobot.sendMessage(txt, `name - ${shots[i].name}, price - ${shots[i].price}zl`)
    }
  }
  if(name[1] == 'redwine') {
    for(let i = 0; i < redwine.length; i++) {
      alcobot.sendMessage(txt, `name - ${redwine[i].name}, price - ${redwine[i].price}zl`)
    }
  }
  if(name[1] == 'whitewine') {
    for(let i = 0; i < whitewine.length; i++) {
      alcobot.sendMessage(txt, `name - ${whitewine[i].name}, price - ${whitewine[i].price}zl`)
    }
  }
  if(name[1] == 'vodka') {
    for(let i = 0; i < vodka.length; i++) {
      alcobot.sendMessage(txt, `name - ${vodka[i].name}, price - ${vodka[i].price}zl`)
    }
  }
  if(name[1] == 'whisky') {
    for(let i = 0; i < whisky.length; i++) {
      alcobot.sendMessage(txt, `name - ${whisky[i].name}, price - ${whisky[i].price}zl`)
    }
  }
  if(name[1] == 'highprocent') {
    for(let i = 0; i < highprocent.length; i++) {
      alcobot.sendMessage(txt, `name - ${highprocent[i].name}, price - ${highprocent[i].price}zl`)
    }
  }
  if(name[1] == 'cigarettes') {
    for(let i = 0; i < cigarettes.length; i++) {
      alcobot.sendMessage(txt, `name - ${cigarettes[i].name}, price - ${cigarettes[i].price}zl`)
    }
  }
  if(name[1] == 'heets') {
    for(let i = 0; i < heets.length; i++) {
      alcobot.sendMessage(txt, `name - ${heets[i].name}, price - ${heets[i].price}zl`)
    }
  }
})

alcobot.onText(/\/start/, (msg) => {
    const txt = msg.chat.id;
    alcobot.sendMessage(txt, 'Welcome! This bot was created to help you and your friends drink alco well');
    alcobot.sendMessage(txt, `${wlc1} \n  \n 1. ${wlc2}(/money) \n 2. ${wlc3}(/people) \n 3. ${wlc4}(/drinkmode) \n 4. ${wlc7} \n \n ${wlc5} \n ${wlc6} 
    \nUse /guide to see full list of available commands`,
    {parse_mode: "HTML" })
    alcobot.sendAudio(txt, 'welcome.ogg');
    setTimeout(() => {
      alcobot.sendMessage(txt, `
      Also, you can support a developer of this bot and check his other works via this link: https://t.me/+BXcYOnEkmes2NTEy
      `)
    }, 2000);
})

//main variables
let zl, people, drinkmode;
let smoke = false;
let codeExecuted = false;

alcobot.onText(/\/money (.+)/, (msg, num) => {
    const txt = msg.chat.id;
    if(Number(num[1])) {
      if(num[1] < 10)
        alcobot.sendMessage(txt, `${num[1]} is not enough! Sorry(`)

      else {
        zl = num[1];
        alcobot.sendMessage(txt, 'Thanks!');
      }
    }
    else {
      alcobot.sendMessage(txt, 'Write a correct value!!');
      alcobot.sendVoice(txt, 'dolboyob.ogg');
    }
})

alcobot.onText(/\/people (.+)/, (msg, num) => {
  const txt = msg.chat.id;
  if(Number(num[1])) {
    if(num[1] > 0 && num[1] <= 10) {
      people = num[1];
      alcobot.sendMessage(txt, 'Thanks!');
    }
    else
      alcobot.sendMessage(txt, 'Please, write a value between 1 and 10. If you have more than 10 people, I cant help you, sorry(');
  }
  else {
    alcobot.sendMessage(txt, 'Write a correct value!!');
    alcobot.sendVoice(txt, 'dolboyob.ogg');
  }
})

alcobot.onText(/\/drinkmode (.+)/, (msg, num) => {
  const txt = msg.chat.id;
  if(Number(num[1])) {
    if(num[1] == 1 || num[1] == 2) {
      drinkmode = num[1];
      alcobot.sendMessage(txt, 'Thanks!');
    }
    else
      alcobot.sendMessage(txt, 'Write correct mode(1 or 2)');
  }
  else {
    alcobot.sendMessage(txt, 'Write a correct value!!');
    alcobot.sendVoice(txt, 'dolboyob.ogg');
  }
})

let cigarette, heet;
alcobot.onText(/\/smoke (.+)/, (msg, num) => {
  const txt = msg.chat.id;
  if(num[1] == 'heet') {
    smoke = true; heet = true; cigarette = false;
    alcobot.sendMessage(txt, 'Thanks!');
  }
  if(num[1] == 'cigarette') {
    smoke = true; cigarette = true; heet = false;
    alcobot.sendMessage(txt, 'Thanks!');
  }
  if(num[1] == 'no') {
    smoke = false; heet = false; cigarette = false;
    alcobot.sendMessage(txt, 'thanks');
  }
})

alcobot.onText(/\/info/, (msg) => {
  const txt = msg.chat.id;
  if(zl != undefined && people != undefined && drinkmode != undefined) {
    alcobot.sendMessage(txt, `Money - ${zl}zl \nPeople - ${people} \nDrinkMode - ${drinkmode} \nSmoke - ${smoke}
    \nIf you are ready, we can start. Use "/beginalco" to begin. 
    \nIf you wanna change something, use previous commands again.`,
    { parse_mode: 'HTML' });
  }
  else {
    alcobot.sendMessage(txt, 'First say me all I need to help you! Please.');
    alcobot.sendVoice(txt, 'chel.ogg');
  }
})

alcobot.onText(/\/beginalco/, (msg) => {
  codeExecuted = false;
  const txt = msg.chat.id;

  //mode 1
  if(zl <= 30 && people <= 3) {
    if(drinkmode == 2) {
      drinkmode = 1;
      alcobot.sendMessage(txt, 'You have not enough money to use mode 2, sorry. Mode has been changed to 1.');
    }
    function alcoone() {
      let zl1, ciga, cigi, change, totalprice;
      zl1 = zl;
      if(smoke == true && zl >= 20) {
        if(cigarette == true)
        cigi = cigarettes.filter(xz => xz.price <= 14);
        if(heet == true)
        cigi = heets;

        ciga = cigi[rand(0, cigi.length - 1)];
        alcobot.sendMessage(txt, `Cigarettes: name - ${ciga.name}, price - ${ciga.price}`);
        zl -= ciga.price;
      }
      let chosenAlco = alcohol[rand(0, 2)];
      let chosenAlcoSum = sum(chosenAlco.map(xz => xz.price)); 

      if(chosenAlcoSum == 28)
        alcobot.sendMessage(txt, 'BEER!');
      if(chosenAlcoSum == 22)
        alcobot.sendMessage(txt, 'SHOTS!');

      //need to change a name of elements 16.02.2023 23:37 // 17.02.2023 20:48 - changed
      let minPrice = chosenAlco.map(xz => xz.price);
      let minPriceIndex = minPrice.indexOf(min(minPrice));
      //
      let result = [];
      let price, pricesum;
      for(let i = 0, j = 0; i < zl; j++) {
        let chosenAlcoPrice = chosenAlco[rand(0, chosenAlco.length)];
        i += chosenAlcoPrice.price;
        result.push(chosenAlcoPrice);
        console.log('i = ' + i);
      }
      console.log(result);
      price = result.map(xz => xz.price);
      pricesum = sum(price);
      //checking if price of alco less or equal to user's money
      if(pricesum <= zl) {
        totalprice = pricesum;
        console.log('1 - ' + totalprice);
        result.forEach(xz => {
          setTimeout(() => {
            alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`)
          }, 1000)
        })
        setTimeout(() => {
          if(ciga == undefined) 
          alcobot.sendMessage(txt, `Total price - ${pricesum}zl`)
          else 
          alcobot.sendMessage(txt, `Total price - ${pricesum + ciga.price}zl`);
        }, 3000);
      }
      //checking if price of alco more than user's money
      if(pricesum > zl) {
        if(result.length == 1)
          result.splice(0, 1, chosenAlco[minPriceIndex]);

            let splicedPrice = result.map(xz => xz.price);
            //
            result.splice(splicedPrice.indexOf(max(splicedPrice)), 1);
            //
            let splicedPrice2 = result.map(xz => xz.price);
            //get index of min price
            let minIndex = splicedPrice.indexOf(min(splicedPrice));
            //checking if users money minus sum of result more or equal to min price of result
            if((zl - sum(splicedPrice2)) >= splicedPrice[minIndex]) { //debugging completed! 16.02.2023 23:37
              result.push(chosenAlco[minPriceIndex]);//заполнить массив элементом с минимальной ценой! Completed! 16.02.2023 23:37
            }
            let splicedPrice3 = result.map(xz => xz.price);
            result.forEach(xz => {
              setTimeout(() => {
                alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`);
              }, 1000);
            })
            if(ciga == undefined)
            alcobot.sendMessage(txt, `Total price - ${sum(splicedPrice3)}zl`);
            else
            alcobot.sendMessage(txt, `Total price - ${sum(splicedPrice3) + ciga.price}zl`);

            setTimeout(() => {
              alcobot.sendMessage(txt, `Your change is ${zl - sum(splicedPrice3)}zl`);
            }, 2500);
      }
      zl = zl1;
    }
    alcoone();
  }


  //mode 2
  if(zl >= 30 && zl <= 100 && people <= 7) {
    if(drinkmode == 1) { //22.02.2023 19:23 - added cigarettes
      let zl1;
      function alcotwo() {
        zl1 = zl;
        let chosenAlco = alcohol[rand(0, 2)];
        let chosenAlcoSum = sum(chosenAlco.map(xz => xz.price));

        if(chosenAlcoSum == 28)
          alcobot.sendMessage(txt, 'BEER!');
        if(chosenAlcoSum == 22)
          alcobot.sendMessage(txt, 'SHOTS!');

        //need to change name of elements 16.02.2023 23:37 // 17.02.2023 20:48 - changed
        let minPrice = chosenAlco.map(xz => xz.price);
        let minPriceIndex = minPrice.indexOf(min(minPrice));
        let result = [];
        let price, pricesum, ciga;
        if(smoke == true) {
          if(cigarette == true)
          ciga = cigarettes[rand(0, cigarettes.length - 1)];
          if(heet == true)
          ciga = heets[rand(0, heets.length - 1)];

          setTimeout(() => {
            alcobot.sendMessage(txt, `ciga - ${ciga.name}, price - ${ciga.price}zl`);
          }, 1000);
          zl -= ciga.price;
        }
        for(let i = 0, j = 0; i < zl; j++) {
          chosenAlco.filter(xz => xz.price < 5);
          let chosenAlcoObj = chosenAlco[rand(0, chosenAlco.length)];
          i += chosenAlcoObj.price;
          result.push(chosenAlcoObj);
          //console.log('i = ' + i);
        }
        //console.log(result);
        price = result.map(xz => xz.price);
        pricesum = sum(price);
        if(pricesum > zl) {
            let splicedPrice = result.map(xz => xz.price);
            result.splice(splicedPrice.indexOf(max(splicedPrice)), 1);
            let splicedPrice2 = result.map(xz => xz.price);
            let minIndex = splicedPrice.indexOf(min(splicedPrice));

            if((zl - sum(splicedPrice2)) >= splicedPrice[minIndex])
              result.push(chosenAlco[minPriceIndex]);//заполнить массив элементом с минимальной ценой! Completed 16.02.2023 23:37

            let splicedPrice3 = result.map(xz => xz.price);
            result.forEach(xz => {
              setTimeout(() => {
                alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`);
              }, 2000);
            })
            if(ciga == undefined) {
              setTimeout(() => {
                alcobot.sendMessage(txt, `Total price - ${sum(splicedPrice3)}zl`);
              }, 3000)
            }
            else {
              setTimeout(() => {
                alcobot.sendMessage(txt, `Total price - ${sum(splicedPrice3) + ciga.price}zl`);
              }, 3000);
            }
        }
        if(pricesum <= zl) {
          result.forEach(xz => {
            setTimeout(() => {
              alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`)
            }, 2000)
          })
          setTimeout(() => {
            let splicedPrice = result.map(xz => xz.price);
            if(ciga == undefined)
            alcobot.sendMessage(txt, `Total price - ${sum(splicedPrice)}zl`);
            else
            alcobot.sendMessage(txt, `Total price - ${sum(splicedPrice) + ciga.price}zl`);
          }, 3000);
          let change;
          if(totalsum < zl || totalsumCiga < zl) {
            change = zl - totalsum;
            setTimeout(() => {
              alcobot.sendMessage(txt, `Your change is ${change}zl.`);
            }, 4000);
          }
          //console.log(pricesum);
        }
        zl = zl1;
      }
      alcotwo();
    }
    if(drinkmode == 2) { //17.02.2023 20:46 - need to write a new algorythm for drinkmode 2 // 19.02.2023 19:53 - completed! need to add cigarettes to drinkmode 1
      function alcotwo2() {
        let zl1, ciga, cigi;
        zl1 = zl;
        let chosenAlco, chosenAlcoFiltered;
        if(zl < 38) {
          chosenAlco = alcohol[rand(2, alcohol.length - 1)];
        }
        else {
          chosenAlco = alcohol[5];//rand(2, alcohol.length)
        }
        if(zl >= 60) {
          if(smoke == true) {
            if(cigarette == true)
            ciga = cigarettes[rand(0, cigarettes.length - 1)];
            if(heet == true)
            ciga = heets[rand(0, heets.length - 1)];

            setTimeout(() => {
              alcobot.sendMessage(txt, `Cigarettes: name - ${ciga.name}, price - ${ciga.price}zl`);
            }, 1000);
            zl -= ciga.price;
          }
        }
        chosenAlcoFiltered = chosenAlco.filter(xz => xz.price <= zl);
        let chosenAlcoSum = sum(chosenAlco.map(xz => xz.price));
        console.log(chosenAlcoSum);
        if(chosenAlcoSum == 389)//filtered vodka - 271 /normal - 389
          alcobot.sendMessage(txt, 'Vodka!');
        if(chosenAlcoSum == 247)
          alcobot.sendMessage(txt, 'WhiteWine!');
        if(chosenAlcoSum == 323)
          alcobot.sendMessage(txt, 'RedWine!');
        if(chosenAlcoSum == 965)//filtered whisky - 88 /normal - 965
          alcobot.sendMessage(txt, 'Whisky!');
        if(chosenAlcoSum == 883)//filtered highprocent - 550 /normal - 883
          alcobot.sendMessage(txt, 'HighProcent!');
        //console.log(chosenAlcoFiltered);
        let minPrice = chosenAlcoFiltered.map(xz => xz.price);
        let minPriceIndex = minPrice.indexOf(min(minPrice));
        let result = [];
        let price, pricesum;
        for(let i = 0, j = 0; i < zl; j++) {
          let chosenAlcoPrice = chosenAlcoFiltered[rand(0, chosenAlcoFiltered.length)];
          i += chosenAlcoPrice.price;
          result.push(chosenAlcoPrice);
          //console.log('i = ' + i);
        }
        //console.log(result);
        price = result.map(xz => xz.price);
        pricesum = sum(price);
        let splicedPrice3;
        if(pricesum > zl) {
          let splicedPrice = result.map(xz => xz.price);
          result.splice(splicedPrice.indexOf(max(splicedPrice)), 1);
            let splicedPrice2 = result.map(xz => xz.price);
            let minIndex = splicedPrice.indexOf(min(splicedPrice));

            if((zl - sum(splicedPrice2)) >= splicedPrice[minIndex])
              result.push(chosenAlcoFiltered[minPriceIndex]);//заполнить массив элементом с минимальной ценой! Completed 16.02.2023 23:37

            splicedPrice3 = result.map(xz => xz.price);
            if(zl < 60) {
              if(zl - sum(splicedPrice3) >= 14 && smoke == true) {
                if(cigarette == true)
                cigi = cigarettes.filter(xz => xz.price <= (zl - sum(splicedPrice3)));
                if(heet == true)
                cigi = heets.filter(xz => xz.price <= (zl - sum(splicedPrice3)));

              ciga = cigi[rand(0, cigi.length - 1)];
              alcobot.sendMessage(txt, ` Cigarettes: name - ${ciga.name}, price - ${ciga.price}zl`);
              }
            }
            let totalsum = sum(splicedPrice3);
            let totalsumCiga = undefined;
            
            if(smoke == true && ciga !== undefined) {
              totalsumCiga = sum(splicedPrice3) + ciga.price;
              totalsum = undefined;
            }

            result.forEach(xz => {
              setTimeout(() => {
                alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`);
              }, 2000);
            })
            if(ciga == undefined) {
              setTimeout(() => {
                alcobot.sendMessage(txt, `Total price - ${totalsum}zl`);
              }, 3000);
            }
            else {
              console.log(totalsumCiga);
              setTimeout(() => {
                alcobot.sendMessage(txt, `Total price - ${totalsumCiga}zl`);
              }, 3000);
            }
            //26.02.2023 - need to write func to add a beer if user has a change
            let change;
            if(totalsum < zl && totalsumCiga == undefined) {
              change = zl - totalsum;
              console.log(change + '  - one');
              setTimeout(() => {
                alcobot.sendMessage(txt, `Your change is ${change}zl.`);
                //
              }, 4000);
            }
            if(totalsumCiga < zl && totalsum == undefined) {
              console.log('zl - ' + zl + ', ciga - ' + totalsumCiga);
              change = zl - totalsumCiga;
              console.log(change + ' - two');
              setTimeout(() => {
                alcobot.sendMessage(txt, `Your change is ${change}zl.`);
                //
              }, 4000);
            }
        }
        if(pricesum <= zl) {
          ciga = undefined;
          result.forEach(xz => {
            setTimeout(() => {
              alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`)
            }, 2000)
          })
          setTimeout(() => {
            let splicedPrice = result.map(xz => xz.price);
            let totalsum = sum(splicedPrice);
            let totalsumCiga;
            if(smoke == true && ciga !== undefined)
            totalsumCiga = sum(splicedPrice) + ciga.price;

            if(ciga == undefined)
            alcobot.sendMessage(txt, `Total price - ${totalsum}zl`);
            else
            alcobot.sendMessage(txt, `Total price - ${totalsumCiga}zl`);
          }, 3000);
        }
        zl = zl1;
      }
      alcotwo2();
    }
  }

  //mode 3
  if(zl > 100) {
    if(drinkmode == 2) {
      function alcothree() {
        let zl1, ciga;
        zl1 = zl;
        let chosenAlco = alcohol[rand(4, 6)];
        //let chosenAlcoSum = sum(chosenAlco.map(xz => xz.price));
        if(smoke == true) {
          if(cigarette == true)
          ciga = cigarettes[rand(0, cigarettes.length - 1)];
          if(heet == true)
          ciga = heets[rand(0, heets.length - 1)];

          setTimeout(() => {
            alcobot.sendMessage(txt, `Cigarettes: name - ${ciga.name}, price - ${ciga.price}zl`);
          }, 1000);
          zl -= ciga.price;
        }
        let minPrice = chosenAlco.map(xz => xz.price);
        let minPriceIndex = minPrice.indexOf(min(minPrice));
        let result = [];
        let price, pricesum;
        for(let i = 0, j = 0; i < zl; j++) {
          let chosenAlcoObj = chosenAlco[rand(0, chosenAlco.length)];
          i += chosenAlcoObj.price;
          result.push(chosenAlcoObj);
          //console.log('i = ' + i);
        }
        //console.log(result);
        price = result.map(xz => xz.price);
        pricesum = sum(price);
        let splicedPrice3;
        if(pricesum > zl) {
          let splicedPrice = result.map(xz => xz.price);
          result.splice(splicedPrice.indexOf(max(splicedPrice)), 1);
            let splicedPrice2 = result.map(xz => xz.price);
            let minIndex = splicedPrice.indexOf(min(splicedPrice));
            if((zl - sum(splicedPrice2)) >= splicedPrice[minIndex]) {
              //console.log('xzzxzxzxxz');
              result.push(chosenAlco[minPriceIndex]);//заполнить массив элементом с минимальной ценой! Completed 16.02.2023 23:37
            }
            splicedPrice3 = result.map(xz => xz.price);
            let totalsum = sum(splicedPrice3);
            let totalsumCiga;
            if(smoke == true)
            totalsumCiga = sum(splicedPrice3) + ciga.price;

            result.forEach(xz => {
              setTimeout(() => {
                alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`);
              }, 2000);
            })
            if(ciga == undefined) {
              setTimeout(() => {
                alcobot.sendMessage(txt, `Total price - ${totalsum}zl`);
              }, 3000);
            }
            else {
              setTimeout(() => {
                alcobot.sendMessage(txt, `Total price - ${totalsumCiga}zl`);
              }, 3000);
            }
            //26.02.2023 - need to write func to add a beer if user has a change
            let changeBeer = [];
            let change;
            if(totalsum < zl || totalsumCiga < zl) {
              change = zl - totalsum;
              setTimeout(() => {
                alcobot.sendMessage(txt, `Your change is ${change}zl. Do you want to buy some beer?(y/n)`);
                alcobot.on('message', (msg) => {
                  const txt = msg.chat.id;
                  if(msg.text.toLowerCase() == 'y') {
                                                      //
                let randBeerPrice;
                for(let i = 0; i < change;) {
                  let randBeer = beer[rand(0, beer.length - 1)];
                  randBeerPrice = randBeer.price;
                  i += randBeerPrice;
                  changeBeer.push(randBeer);
                }
                //console.log(changeBeer);
                let changeBeerPrice = changeBeer.map(xz => xz.price);
                console.log(sum(changeBeerPrice));
                if(sum(changeBeerPrice) > change) {
                  changeBeer.splice(changeBeerPrice.indexOf(max(changeBeerPrice), 1));
                }
                let chbeerpr2 = changeBeer.map(xz => xz.price);
                setTimeout(() => {
                  alcobot.sendMessage(txt , `beer price - ${sum(chbeerpr2)}`);
                }, 3000)
                console.log(changeBeer);
                changeBeer.forEach(xz => {
                  setTimeout(() => {
                    alcobot.sendMessage(txt, `beer - ${xz.name}, price - ${xz.price}zl`);
                  }, 2000)
                })
                codeExecuted = true;
                changeBeer = [];
                  }
                  if(msg.text.toLowerCase() == 'n' && !codeExecuted) {
                    alcobot.sendMessage(txt, 'Okay.');
                    codeExecuted = true;
                  }
                })
              }, 4000);
            }
        }
        if(pricesum <= zl) {
          ciga = undefined;
          result.forEach(xz => {
            setTimeout(() => {
              alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}zl`)
            }, 2000)
          })
          setTimeout(() => {
            let splicedPrice = result.map(xz => xz.price);
            let totalsum = sum(splicedPrice);
            let totalsumCiga;
            if(smoke == true)
            totalsumCiga = sum(splicedPrice) + ciga.price;

            if(ciga == undefined)
            alcobot.sendMessage(txt, `Total price - ${totalsum}zl`);
            else
            alcobot.sendMessage(txt, `Total price - ${totalsumCiga}zl`);
          }, 3000);
          console.log(pricesum);
        }
        zl = zl1;
      }
      alcothree();
    }
  }
})


//testing...
let pricetest = [
  {name: 'xzz', price: 10}, {name: 'lodfd', price: 15},
  {name: 'xzzxxz', price: 5}, {name: 'dkfkfd', price: 22}
];
//create an array with prices
let pric = pricetest.map(xz => xz.price);
//get an index of minimal price
let pricindex = pric.indexOf(min(pric));
//find an element with minimal price
//console.log(pricetest[pricindex]);

let mass = [1, 2, 33, 4];
//mass.push(mass.indexOf(max(mass)));
let ceni = pricetest.map(xz => xz.price);
ceni.splice(ceni.indexOf(min(ceni)), 1);
//console.log(ceni);

function filterArr(arr) {
  return arr.filter(xz => xz.price < 50);
}


//let testalco = alcohol[rand(0, 7)];
//let testFiltered = filterArr(testalco);
//console.log(testFiltered);

/*

Bug fixing code

/////

let spliced;
        spliced = result.splice(0, 1, result[price.indexOf(min(price))]);
        if(zl - (pricesum - (result[price.indexOf(max(price))].price)) < result[price.indexOf(max(price))].price) {
          console.log('less than');

          console.log('result - ' + result[price.indexOf(min(price))].name);
          console.log('chosenalco - ' + chosenalco[price.indexOf(min(price))].name);

          if(result.length == 1) {
            spliced = result.splice(0, 1, chosenalco[price.indexOf(min(price))]);
          }
          spliced = result.splice(chosenalco[price.indexOf(min(price))], 1);
        }
        else {
          console.log('ok');
          console.log('result1 = ' + result);
          spliced = chosenalco.filter(xz => xz.price <= zl - (pricesum - (result[price.indexOf(max(price))].price)));
        }
        console.log('maxprice ' + price.indexOf(max(price)));
        result.splice(price.indexOf(max(price)), 1, {name: spliced[0].name, price: spliced[0].price});
        console.log(result);
        result.forEach(xz => {
          setTimeout(() => {
            alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}`);
          }, 1000);
        })
        let splicedprice = result.map(xz => xz.price);
        setTimeout(() => {
          alcobot.sendMessage(txt, `Total price - ${sum(splicedprice)}zl`)
        }, 3000);

/////

if(sum(splicedprice) < zl) {
            console.log('<<<<<<' + splicedprice + '' + zl);
            //result.splice(result.indexOf(max(result)), 1, result.indexOf(min(result)));
            result.forEach(xz => {
            setTimeout(() => {
              alcobot.sendMessage(txt, `my suggestion for you - ${xz.name}, ${xz.price}`);
            }, 1000);
          })
          alcobot.sendMessage(txt, `price - ${sum(splicedprice)}zl`);
          }

/////

alcobot.sendMessage(txt, `my suggestion for you - ${result[j].name}, ${result[j].price}`);
alcobot.sendMessage(txt, `my suggestion for you - ${result[j].name}, ${result[j].price}`);
alcobot.sendMessage(txt, `my suggestion for you - ${result[j].name}, ${result[j].price}`);

/////

let pivo, shot;
      result.forEach(xz => {
        if(xz.name == beer[0].name || xz.name == beer[1].name ||
           xz.name == beer[2].name || xz.name == beer[3].name ||
           xz.name == beer[4].name || xz.name == beer[5].name ||
           xz.name == beer[6].name || xz.name == beer[7].name) {
            pivo = 'BEER!';
           }
           else {
            shot = 'SHOTS!';
           }
      })
      if(pivo == undefined) {
        alcobot.sendMessage(txt, `${shot}`);
      }
      if(shot == undefined) {
        alcobot.sendMessage(txt, `${pivo}`);
      }

/////

if(smoke == true) {
          ciga = cigarettes[rand(0, cigarettes.length - 1)];
          alcobot.sendMessage(txt, `ciga - ${ciga.name}, price - ${ciga.price}`);
          zl -= ciga.price;
        }*/

        /*if(zl < 50) {
          chosenAlcoFiltered = chosenalco.filter(xz => xz.price < 50);
        }
        if(zl <= 38) {
          chosenAlcoFiltered = chosenalco.filter(xz => xz.price <= 38);
        }
        else {
          chosenAlcoFiltered = chosenalco.filter(xz => xz.price <= 50);
        }

/////

*/


//камень ножницы бумага 

let bot = 0;
let user = 0;
let userwin = ['user_win.ogg', 'user_win2.ogg'];
alcobot.on('message', (msg) => {
  const txt = msg.chat.id;
  const msgtxt = msg.text;
  if(msgtxt.toLowerCase() == 'камень' || msgtxt.toLowerCase() == 'ножницы' || msgtxt.toLowerCase() == 'бумага') {
    function game() {
      let objects = ['камень', 'ножницы', 'бумага'];
      let random = objects[rand(0, 3)];
      if(random == msgtxt) {
        alcobot.sendMessage(txt, 'Ничья!');
      }
      if(msgtxt.toLowerCase() == 'камень') {
        if(random == 'ножницы') {
          alcobot.sendMessage(txt, 'ножницы');
          alcobot.sendMessage(txt, 'You win!');
          user++;
          setTimeout(() => {
            alcobot.sendMessage(txt, `${user} : ${bot}`);
          }, 1500);
        }
        if(random == 'бумага') {
          alcobot.sendMessage(txt, 'бумага');
          alcobot.sendMessage(txt, 'I win!');
          bot++;
          setTimeout(() => {
            alcobot.sendMessage(txt, `${user} : ${bot}`);
          }, 1500);
        }
      }
      if(msgtxt.toLowerCase() == 'бумага') {
        if(random == 'ножницы') {
          alcobot.sendMessage(txt, 'ножницы');
          alcobot.sendMessage(txt, 'I win!');
          bot++;
          setTimeout(() => {
            alcobot.sendMessage(txt, `${user} : ${bot}`);
          }, 1500);
        }
        if(random == 'камень') {
          alcobot.sendMessage(txt, 'камень');
          alcobot.sendMessage(txt, 'You win!');
          user++;
          setTimeout(() => {
            alcobot.sendMessage(txt, `${user} : ${bot}`);
          }, 1500);
        }
      }
      if(msgtxt.toLowerCase() == 'ножницы') {
        if(random == 'бумага') {
          alcobot.sendMessage(txt, 'бумага');
          alcobot.sendMessage(txt, 'You win!');
          user++;
          setTimeout(() => {
            alcobot.sendMessage(txt, `${user} : ${bot}`);
          }, 1500);
        }
        if(random == 'камень') {
          alcobot.sendMessage(txt, 'камень');
          alcobot.sendMessage(txt, 'I win!');
          bot++;
          setTimeout(() => {
            alcobot.sendMessage(txt, `${user} : ${bot}`);
          }, 1500);
        }
      }
      if(user == 3) {
        alcobot.sendMessage(txt, 'Well played!!!');
        alcobot.sendVoice(txt, userwin[0, userwin.length - 1]);
        setTimeout(() => {
          user = 0;
          bot = 0;
        }, 3000);
      }
      if(bot == 3) {
        alcobot.sendMessage(txt, 'Ez for me!!');
        alcobot.sendVoice(txt, 'bot_win.ogg')
        setTimeout(() => {
          user = 0;
          bot = 0;
        }, 3000);
      }
    }
    game();
  }
})