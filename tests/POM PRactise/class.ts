class Student{


    name: string;
constructor(name:string)
{
    this.name=name;
}


  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const  stu=new Student("John");
console.log(stu.name);
stu.greet();
