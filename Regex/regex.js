let pattern = 'K';
let regExOne = new RegExp(pattern);

let flag = 'gi';
let regExTwo = new RegExp(pattern,flag);

let regExThree =/i/gi ;

const strToCheck = "Hi, I'm Krishna vetthi Boddu. I live in Apex, North Carolina, USA. I liKe to travel places, I enjoy being in nature."

const result = regExThree.test(strToCheck);
console.log(result)

const match = strToCheck.match(regExOne);
console.log(match)

const replace = strToCheck.replace(regExTwo, 'k');
console.log(replace);

const webUrl = "https://www.google%20.com/"
const useableUrl = webUrl.replace(/%\d\d/,'')
console.log(useableUrl)