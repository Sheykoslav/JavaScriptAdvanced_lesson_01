const User = (function () {
  let name = 'Pavlo';
  const age = 24;

  function changeName(task) {
    if (task) {
      name = task.name;
      task.complete();
    }
  }

  return{
    getName: function() {
      console.log(`Username is ${name}`);
      return name;
    },
    getAge: function() {
      console.log(`Userage is ${age}`);
      return age;
    },
    changeName: changeName
  }

})();

class Task{
  constructor(name) {
    this.name = name;
  }

  complete(){
    console.log(`You have already changed name`);
  }
}

User.getName();
User.getAge();

const task1 = new Task('Yaroslav');
User.changeName(task1);
User.getName();

const task2 = new Task('Vlad');
User.changeName(task2);
User.getName();
