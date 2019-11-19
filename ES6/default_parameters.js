//jshist esnext:true

var func = (temp, threshold = 10) => {
    if (temp < threshold) {
      return "Cold";
    } else {
      return "Hot";
    }
};

console.log(func(12)); //set temp to 12
console.log(func(12,15)); //set temp to 12 and threshold to 15
