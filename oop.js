

class Player {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
}

const imran = new Player("Imran Khan", 50, 'Old player');
console.log(imran);



class Human {
    constructor(name, age, relation) {
        this.name = name;
        this.age = age;
        this.relation = relation;
    }
}

const sofat = new Human('Sofat Ullah', 420, 'Grand Father');
console.log(sofat)



class Children extends Human {
    constructor(name, age, relation, status) {
        super(name, age, relation);
        this.status = status;
    }
}

const motalib = new Children('Abdul Motalib', 65, 'Father', 'Alive');
console.log(motalib)






