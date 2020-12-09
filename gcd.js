// 两个数的最大公约数算法：
// 若q是0，则最大公约数为p。否则，将p除以q得到余数r, p和q的最大公约数即为q和r的最大公约数
function getGcd(p, q) {
  if(q === 0) {
    return p;
  }
  return arguments.caller.call(q, p % q);
}
