// Problem 1 : Ana to Vori
function anaToVori(ana) {
if (typeof ana != 'number') {
return 'Please, Give a number.';
}
if (ana < 0) {
return 'Please, give 0 or Positive number.';
}
const vori = ana / 16;
return vori;
}

// Problem 2 : FoodPanda Cost
function pandaCost(singaraQuantity, somochaQuantity, jilapiQuantity) {
if (typeof singaraQuantity != 'number' || typeof somochaQuantity != 'number' || typeof jilapiQuantity != 'number') {
return 'Please, Give a number.';
}
if (singaraQuantity < 0 || somochaQuantity < 0 || jilapiQuantity < 0) {
return 'Please, give 0 or Positive number.';
}
// Per Peace Cost
const perSingaraCost = 7;
const perSomochaCost = 10;
const perJilapiCost = 15;
// Cost Calculation
const singaraCost = perSingaraCost * singaraQuantity;
const somochaCost = perSomochaCost * somochaQuantity;
const jilapiCost = perJilapiCost * jilapiQuantity;
const totalCost = singaraCost + somochaCost + jilapiCost;
return totalCost;
}

// Problem 3 : Picnic Budget
function picnicBudget(participant) {
if (typeof participant != 'number') {
return 'Please, Give a number.';
}
if (participant < 0) {
return 'Please, give 0 or Positive number.';
}
// Participation Fee
const moneyFor1To100 = 5000;
const moneyFor101To200 = 4000;
const moneyForRest = 3000;
if (participant <= 100) {
const totalMoney = participant * moneyFor1To100;
return totalMoney;
}
else if (participant <= 200) {
const totalMoneyOf1To100 = 100 * moneyFor1To100;
const restParticipant = participant - 100;
const totalMoneyOfRest = restParticipant * moneyFor101To200;
const totalMoney = totalMoneyOf1To100 + totalMoneyOfRest;
return totalMoney;
}
else {
const totalMoneyOf1To100 = 100 * moneyFor1To100;
const totalMoneyOf101To200 = 100 * moneyFor101To200;
const restParticipant = participant - 200;
const totalMoneyOfRest = restParticipant * moneyForRest;
const totalMoney = totalMoneyOf1To100 + totalMoneyOf101To200 + totalMoneyOfRest;
return totalMoney;
}
}

// Problem 4 : First Odd Name
function oddFriend(names) {
if (typeof names != 'object') {
return 'Please, Give an array.';
}
for (let i = 0; i < names.length; i++) {
const name = names[i];
for (let i = 0; i < names.length; i++) {
const name = names[i];
if (typeof name != 'string') {
return 'Give all element in String';
}
}
for (let i = 0; i < names.length; i++) {
const name = names[i];
if (name.length % 2 == 1) {
return name;
}
}
return 'Please, Give a name that has odd number characters.';
}
}
