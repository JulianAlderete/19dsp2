class fact{
    constructor(n){
        this.n = n;
        this. cost = 0;
    }

    value(){
        return this.calcVal(this.n)
    }

    calcVal(x){
        if(x> 1){
            this.cost ++;
            return (this.calcVal(x-1) * x);
            }
        else return x;
    }

    succ(){

    }

}

let fact1 = new fact(5);