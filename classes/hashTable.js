class HashTable {

    constructor(size) {
      this.table = new Array(size);
      this.size = 0;
    }


    addSize(amount){
        this.size += amount;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        if(this.table[key] != undefined){
            key++;
            this.set(key,value);

        }
        this.table[key] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
    
    remove(key) {
        const index = this._hash(key);
      
        if (this.table[index] && this.table[index].length) {
          this.table[index] = undefined;
          this.size--;
          return true;
        } else {
          return false;
        }
    }

}

module.exports = {HashTable}