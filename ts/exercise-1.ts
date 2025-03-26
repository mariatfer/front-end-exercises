interface Animal {
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
    canFly: boolean
};

type Bird = Animal;

type Dog = Omit<Animal, "canFly" > & {
    race: "Husky" | "Labrador" | "Chucho",
    age: number
};

type Cat = Pick<Animal, "name" | "canSleep"> & {
    color: string;
};

type Snake = Pick<Animal, "canEat" | "canDrink" | "canSleep">;

const bird: Bird = {
    name: "Piolin",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true
};

const dog: Dog = {
    name: "Pillín",
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: "Chucho",
    age: 15
};


const cat: Cat = {
    name: "Kira",
    color: "black",
    canSleep: true
};

const snake: Snake = {
    canEat: true,
    canDrink: true,
    canSleep: true
};
