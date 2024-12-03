export class Cv {
  id :number=123;
  name:string = 'Riadh';
  firstname:string = 'Ibrahim';
  age:number =22;
  cin:number = 1111;
  job:string = 'student';
  path:string= 'assets/images/Riadh.jpg';

  constructor(id : number, name: string , firstname: string , age: number , cin: number , job: string , path: string ) {
      this.id=id ;
      this.name = name ;
      this.firstname = firstname;
      this.age = age;
      this.cin = cin;
      this.job = job;
      this.path = path;
  }
}