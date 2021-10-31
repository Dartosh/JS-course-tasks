module.exports = function toReadable (number) {
    let h = Math.trunc(number/100);
    let d = Math.trunc(number/10)-h*10;
    let u = number % 10;
    let ans = '';
    if(number == 0)return 'zero';
    if(h == 1) ans += 'one hundred';
    if(h == 2) ans += 'two hundred';
    if(h == 3) ans += 'three hundred';
    if(h == 4) ans += 'four hundred';
    if(h == 5) ans += 'five hundred';
    if(h == 6) ans += 'six hundred';
    if(h == 7) ans += 'seven hundred';
    if(h == 8) ans += 'eight hundred';
    if(h == 9) ans += 'nine hundred';

    if(h != 0 && d ==0 && u ==0)
    return ans;

    if(h != 0)
    ans += ' ';

    if(d == 0 && u == 1){ ans += 'one';return ans;}
    if(d == 0 && u == 2){ ans += 'two';return ans;}
    if(d == 0 && u == 3){ ans += 'three';return ans;}
    if(d == 0 && u == 4){ ans += 'four';return ans;}
    if(d == 0 && u == 5){ ans += 'five';return ans;}
    if(d == 0 && u == 6){ ans += 'six';return ans;}
    if(d == 0 && u == 7){ ans += 'seven';return ans;}
    if(d == 0 && u == 8){ ans += 'eight';return ans;}
    if(d == 0 && u == 9){ ans += 'nine';return ans;}
    if(d == 1 && u == 0){ ans += 'ten';return ans;}
    if(d == 1 && u == 1){ ans += 'eleven';return ans;}
    if(d == 1 && u == 2){ ans += 'twelve';return ans;}
    if(d == 1 && u == 3){ ans += 'thirteen';return ans;}
    if(d == 1 && u == 4){ ans += 'fourteen';return ans;}
    if(d == 1 && u == 5){ ans += 'fifteen';return ans;}
    if(d == 1 && u == 6){ ans += 'sixteen';return ans;}
    if(d == 1 && u == 7){ ans += 'seventeen';return ans;}
    if(d == 1 && u == 8){ ans += 'eighteen';return ans;}
    if(d == 1 && u == 9){ ans += 'nineteen';return ans;}

    if(d == 1){ ans += 'ten';}
    if(d == 2){ ans += 'twenty';}
    if(d == 3){ ans += 'thirty';}
    if(d == 4){ ans += 'forty';}
    if(d == 5){ ans += 'fifty';}
    if(d == 6){ ans += 'sixty';}
    if(d == 7){ ans += 'seventy';}
    if(d == 8){ ans += 'eighty';}
    if(d == 9){ ans += 'ninety';}

    if(u != 0)
    ans += ' ';

    if(u == 1) ans += 'one';
    if(u == 2) ans += 'two';
    if(u == 3) ans += 'three';
    if(u == 4) ans += 'four';
    if(u == 5) ans += 'five';
    if(u == 6) ans += 'six';
    if(u == 7) ans += 'seven';
    if(u == 8) ans += 'eight';
    if(u == 9) ans += 'nine';
    return ans;
}
