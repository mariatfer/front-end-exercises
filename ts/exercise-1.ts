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