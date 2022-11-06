class Human {
  static firstName = "Maii";
  dob = 2000;

  age() {
    Human.fullName();
    return Human.firstName + this.dob;
  }

  static fullName() {
    console.log(Human.firstName);
  }
}

Human.fullName();
