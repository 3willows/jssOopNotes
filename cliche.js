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
  constructor(name,age, Livesleft = 9){
    super(name, age)
    // must use that otherwise get an error message!
    this.Livesleft = Livesleft 
  }
  meow() {
    return (`${this.name} says MEOOOOW!`)
  }
}

class Dog extends Pet{
  woof(){
    return (`${this.name} says WOOF!`)
  }
}