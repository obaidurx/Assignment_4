// Code link:  https://github.com/obaidurx/Assignment_4

// problem 1 : Convert Seer to Mon

function seerToMon(seer) {
  seer = Math.abs(seer); // negative value validation
  const mon = seer / 40;
  return mon;
}
// const inputSeer = seerToMon(-920); // output: 23
const inputSeer = seerToMon(420); // output: 10.5
console.log(inputSeer);

// problem 2 : The total amount of sales

function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
  // negative value validation
  shirtsQuantity = Math.abs(shirtsQuantity);
  pantsQuantity = Math.abs(pantsQuantity);
  shoesQuantity = Math.abs(shoesQuantity);

  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoePrice = 500;

  const totalPrice =
    perShirtPrice * shirtsQuantity +
    perPantPrice * pantsQuantity +
    perShoePrice * shoesQuantity;
  return totalPrice;
}
// price = totalSales(1, 1, 1); // output: 800
price = totalSales(-2, 1, 1); // output: 900
console.log(price);

// problem 3 : Calculate delivery cost

function deliveryCost(quantity) {
  // negative value validation
  quantity = Math.abs(quantity);

  const quantity1To100 = 100;
  const quantity101To200 = 80;
  const quantityUpTo200 = 50;

  if (quantity <= 100) {
    tShirtPrice1To100 = quantity * quantity1To100;
    return tShirtPrice1To100;
  } else if (quantity <= 200) {
    const tShirtPrice100 = 100 * quantity1To100;
    const restTShirt = quantity - 100;
    const tShirtPrice101To200 = restTShirt * 80;
    const totalPrice1To200 = tShirtPrice100 + tShirtPrice101To200;
    return totalPrice1To200;
  } else {
    const tShirtPrice100 = 100 * quantity1To100;
    const tShirtPrice101To200 = 100 * quantity101To200;
    const restTShirt = quantity - 200;
    const tShirtPriceUpTo200 = restTShirt * 50;
    const totalPrice =
      tShirtPrice100 + tShirtPrice101To200 + tShirtPriceUpTo200;
    return totalPrice;
  }
}
console.log(deliveryCost(-205));

//problem 4 :find the perfect friend of five characters.

function perfectFriend(friends) {
  // invalid name validation
  let isFriendsString = typeof friends == "string";
  let isFriendsNum = typeof friends == "number";
  if (isFriendsString == true) {
    return "String is not allowed Please Enter a Valid array";
  } else if (isFriendsNum == true) {
    return "Number is not allowed Please Enter a Valid array";
  }

  let perfectFriend = "";
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 5) {
      perfectFriend = friends[i];
      break;
    }
  }
  return perfectFriend;
}

let myFriends = perfectFriend([
  "Sakina",
  "Morjina",
  "Amina",
  "Jorina",
  "China",
  "Janina",
]);
console.log(myFriends);
