function isLeapYear(year){
    if (year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYearLeapYear);

const herYear = 2094;
const isHerYearLeapYear = isLeapYear(herYear);
console.log('is her year leap year', isHerYearLeapYear);