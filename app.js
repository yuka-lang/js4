class Animal {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

  const animal = new Animal("犬",2);

  console.log(`名前:${animal.name}`);
  console.log(`年齢：${animal.age}`);