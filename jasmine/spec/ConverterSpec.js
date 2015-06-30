describe("numberToRoman", function() {

  it("It converts 1 to I", function() {
    expect(numberToRoman(1)).toEqual("I");
  });

  it("It converts 2 to II", function() {
    expect(numberToRoman(2)).toEqual("II");
  });

  it("It converts 4 to IV", function() {
    expect(numberToRoman(4)).toEqual("IV");
  });

  it("It converts 5 to V", function() {
    expect(numberToRoman(5)).toEqual("V");
  });

  it("It converts 6 to VI", function() {
    expect(numberToRoman(6)).toEqual("VI");
  });

  it("It converts 7 to VII", function() {
    expect(numberToRoman(7)).toEqual("VII");
  });

  it("It converts 8 to VIII", function() {
    expect(numberToRoman(8)).toEqual("VIII");
  });

  it("It converts 9 to IX", function() {
    expect(numberToRoman(9)).toEqual("IX");
  });

  it("It converts 10 to X", function() {
    expect(numberToRoman(10)).toEqual("X");
  });

  it("It converts 14 to XIV", function() {
    expect(numberToRoman(14)).toEqual("XIV");
  });

  it("It converts 20 to XX", function() {
    expect(numberToRoman(20)).toEqual("XX");
  });
  
  it("It converts 40 to XL", function() {
    expect(numberToRoman(40)).toEqual("XL");
  });

 it("It converts 58 to LVIII", function() {
    expect(numberToRoman(58)).toEqual("LVIII");
  });

  it("It converts 60 to LX", function() {
    expect(numberToRoman(60)).toEqual("LX");
  });

  it("It converts 98 to XCVIII", function() {
    expect(numberToRoman(98)).toEqual("XCVIII");
  });

  it("It converts 99 to XCIX", function() {
    expect(numberToRoman(99)).toEqual("XCIX");
  });

  it("It converts 2,939 to MMCMXXXIX", function() {
    expect(numberToRoman(2939)).toEqual("MMCMXXXIX");
  });

  it("It converts 3,226 to MMMCCXXVI", function() {
    expect(numberToRoman(3226)).toEqual("MMMCCXXVI");
  });
  



});

describe("romanToNumber", function() {


  it("It converts 1 to I", function() {
    expect(romanToNumber('I')).toEqual(1);
  });

  it("It converts 2 to II", function() {
    expect(romanToNumber('II')).toEqual(2);
  });

  it("It converts 4 to IV", function() {
    expect(romanToNumber('IV')).toEqual(4);
  });

  it("It converts 5 to V", function() {
    expect(romanToNumber('V')).toEqual(5);
  });

  it("It converts 6 to VI", function() {
    expect(romanToNumber('VI')).toEqual(6);
  });

  it("It converts 7 to VII", function() {
    expect(romanToNumber('VII')).toEqual(7);
  });

  it("It converts 8 to VIII", function() {
    expect(romanToNumber('VIII')).toEqual(8);
  });

  it("It converts 9 to IX", function() {
    expect(romanToNumber('IX')).toEqual(9);
  });

  it("It converts 10 to X", function() {
    expect(romanToNumber('X')).toEqual(10);
  });

  it("It converts 14 to XIV", function() {
    expect(romanToNumber('XIV')).toEqual(14);
  });

  it("It converts 20 to XX", function() {
    expect(romanToNumber('XX')).toEqual(20);
  });
  
  it("It converts 40 to XL", function() {
    expect(romanToNumber('XL')).toEqual(40);
  });

 it("It converts 58 to LVIII", function() {
    expect(romanToNumber('LVIII')).toEqual(58);
  });

  it("It converts 60 to LX", function() {
    expect(romanToNumber('LX')).toEqual(60);
  });

  it("It converts 98 to XCVIII", function() {
    expect(romanToNumber('XCVIII')).toEqual(98);
  });

  it("It converts 99 to XCIX", function() {
    expect(romanToNumber('XCIX')).toEqual(99);
  });

  it("It converts 2,939 to MMCMXXXIX", function() {
    expect(romanToNumber('MMCMXXXIX')).toEqual(2939);
  });

  it("It converts 3,226 to MMMCCXXVI", function() {
    expect(romanToNumber("MMMCCXXVI")).toEqual(3226);
  });
  



});
