class Pet {
  constructor (name ,age){
    this.name = name
    this.age = age
  }
  eat(){
    return `${this.name} is eating`
  }
}

class Cat extends Pet{
  meow() {
    return (`${this.name} says MEOOOOW!`)
  }
}

class Dog extends Pet{
  woof(){
    return (`${this.name} says WOOF!`)
  }
}