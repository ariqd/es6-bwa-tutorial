// Ambil element
const data = document.getElementById("data");

// ES6
// Modul untuk member kelas
class Student {
  constructor(username, password, id_kelas) {
    this.username = username;
    this.password = password;
    this.id_kelas = id_kelas;
  }

  join() {
    console.log(
      this.username + " telah bergabung pada kelas " + this.id_kelas
    );
  }
}

let addStudent = new Student("ariqd", "123123", 33);

addStudent.join();
