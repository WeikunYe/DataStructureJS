class StaticArray{
    #length;
    #items;
    constructor(length){
        this.#length = length;
        this.#items = [];
    }
    length(){
        return this.#length;
    }
    assign(index, value){
        if(index+1 > this.#length || index < 0){
            throw "Index out of range";
        }else{
            this.#items[index] = value;
        }
    }
    search(index){
        if(index+1 > this.#length || index < 0){
            throw "Index out of range";
        }else{
            return this.#items[index];
        }
    }
}


var myArray = new StaticArray(5);

console.log(myArray.length());

myArray.assign(3, "Hello");

console.log(myArray.search(3));