(function () {
  let friends = ['Abhi', 'Mani', 'Chander'];
  console.log(friends);
  console.log(friends[0]);
  // friends[0] = 'Tushar';
  // console.log(friends);
  const bot = ['Tushar', 'Sharma', 2022 - 2003, friends];
  // console.log(bot, bot.length);
  for (const key in bot) {
    if (!Array.isArray(bot[key])) {
      console.log(bot[key]);
    }
    if (Array.isArray(bot[key])) {
      console.log('Friends:-');
      for (const i in bot[key]) {
        console.log(bot[key][i]);
      }
    }
  }

  function calcAge(birthYear) {
    return 2022 - birthYear;
  }
  let years = [2003, 2004, 2005];
  console.log(calcAge(years));

  //\\|-----------|
  let length = friends.push('bot');
  console.log(friends, length);
  friends.unshift('bot0');
  console.log(friends);
  let popped = friends.pop();
  console.log(friends, popped);
  let shifted = friends.shift();
  console.log(friends, shifted);
  console.log(friends.indexOf('Mani'));
  console.log(friends.includes('Mani'));
  console.log(friends.includes('Abhi'));
  if (friends.includes('Mani')) {
    console.log('I have a friend named Mani.');
  }

  function calcTip(billValue) {
    return billValue >= 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
  }
  let bills = [125, 555, 44],
    tips = [];
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
  }
  let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  console.log(total);

  let botObj = {
    title: 'bot',
    birthYear: 2003,
    address: 'Dosanjh',
    friends: friends,
    hasliscense: false,
    calcAge: function () {
      this.age = 2022 - this.birthYear;
      return this.age;
    },
  };
  console.log(botObj);
  let name = 'address';
  console.log(botObj.address);
  console.log(botObj[name]);
  // let interestedIn = prompt('what is this bro');
  // if(botObj[interestedIn]) {
  //   console.log(botObj[interestedIn]);
  // }else {
  //   console.log('no');
  // }
  console.log(botObj.friends[2]);
  console.log(botObj.calcAge());
  console.log(botObj.age);
  let data = botObj.hasliscense ? 'a' : 'no';
  console.log(
    `${botObj.title} is a ${botObj.age} year old Developer, and He has ${data} driver's License`
  );

  let maniobj = {
    name: 'Mani',
    mass: '78',
    height: 1.69,
    calcBmi: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    },
  };
  let chanderObj = {
    name: 'Chander',
    mass: '79',
    height: 1.69,
    calcBmi: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    },
  };
  maniobj.calcBmi();
  chanderObj.calcBmi();
  console.log(maniobj.bmi, chanderObj.bmi);
  if (maniobj.bmi > chanderObj.bmi) {
    console.log(`${maniobj.name}'s BMI (${maniobj.bmi}) is higher than ${chanderObj.name}'s BMI 
    (${chanderObj.bmi})`);
  } else {
    console.log(`${chanderObj.name}'s BMI (${chanderObj.bmi}) is higher than ${maniobj.name}'s BMI 
    (${maniobj.bmi})`);
  }

  for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetetion ${rep}`);
  }
  for (let i = bot.length - 1; i >= 0; i--) {
    // console.log(i, bot[i]);
    if (Array.isArray(bot[i])) {
      for (let x = bot[i].length - 1; x >= 0; x--) {
        console.log(bot[i][x]);
      }
    }
  }

  let rep = 0;
  while (rep <= 10) {
    console.log(`While Loop:- Exercise Reps count is ${rep}`);
    rep++;
  }
  let dice = Math.trunc(Math.random() * 6) + 1;
  while (dice !== 6) {
    console.log(`You Rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`the loop is about to end`);
  }
})();

// Coding Challenge #4
(function () {
  function calcTip(billValue) {
    return billValue >= 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
  }
  let bills = [125, 555, 44],
    tips = [],
    total = [];
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(calcTip(bills[i]) + bills[i]);
  }
  let calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; arr.length > i; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  };
  console.log(calcAverage([8, 3, 7]));
  console.log(calcAverage(total));
  console.log(calcAverage(tips));

  console.log('----------New--------------');

let temperature = function (t1, t2){
  let temps= t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length;  i++) {
    if(typeof temps[i] !== 'number') continue;
    if(temps[i] > max) max = temps[i];
    if(temps[i] < min) min = temps[i];
  }
  return max-min;
};
let amplitude = temperature([50, 3, 7,6,6,'error',-50,-1], [2,3,4,5,6,2,6]);
console.log(amplitude);
})();