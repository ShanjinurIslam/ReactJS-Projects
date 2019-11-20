//jshist esnext:true

var obj = {
    fn: function() {
        console.log(typeof this);
        return () => {
            console.log(typeof this);
            return 5;
        };
    }
};

var v = obj.fn();
console.log(v());