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
    console.log(this.username + " telah bergabung pada kelas " + this.id_kelas);
  }

  countMembers() {
    console.log("Tersedia 100 Member");
  }
}

class Subscription extends Student {
  constructor(username, paket) {
    super(username);
    this.paket = paket;
  }

  joinedPackage() {
    console.log(
      `Hi ${this.username}, kamu telah berlangganan paket ${this.paket}`
    );
  }
}

let addSubscription = new Subscription("ariqd", "Premium");
addSubscription.joinedPackage();
addSubscription.countMembers();
