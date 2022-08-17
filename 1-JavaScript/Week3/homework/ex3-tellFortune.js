function selectRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function tellFortune(kids, partner, loc, job) {
  return `You will be a ${selectRandomly(job)} in ${selectRandomly(loc)},
   married to ${selectRandomly(partner)} with ${selectRandomly(kids)} kids.`;
}
function main() {
  const numKids = [1, 2, 3, 4, 5];

  const partnerNames = ['Tony', 'Adam', 'Mike', 'David', 'Rob'];

  const locations = ['NewYork', 'Hollywood', 'London', 'Istanbul', 'Amsterdam'];

  const jobTitles = ['Doctor', 'Teacher', 'Engineer', 'Lawyer', 'Footballer'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
