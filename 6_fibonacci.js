class Fibbo{
    constructor(){
        this.n1 = 0;
        this.n2 = 1;
        this.cost = 0;
        this.fib = new Array(new Array, new Array);
        this.costos = new Array(new Array, new Array);
    }
    value(n){
        if(this.cost == 0){
            this.table(this.n1);
            this.table(this.n2);
        }
        let temp = this.n2; 
        this.n2 = this.n2 + this.n1; 
        this.n1 = temp; 
        if(n>2){
            this.cost ++;
            this.value(n-1); 
            }else
                console.log ("si estoy enrando")
                return this.n2
            
            
            
    }
    cost(){

    }
    succession(){
        
    }
    table(){

    }
}