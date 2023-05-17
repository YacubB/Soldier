const soldier = {
  name: "Van Damm",
  health: 10,
  weapon: {
    name: "Kalashnicov",
    cartridges: 30,
  },
  supplies: 3,
  fire() {
    let result = "";
    if (this.weapon.cartridges === 0) {
      result = "обойма пуста. Перезаредитесь";
      return result;
    }
    this.weapon.cartridges--;
    console.log("бах-бах");
  },
  recharge() {
    if (this.supplies === 0) {
      return "не осталось припасов";
    }
    this.weapon.cartridges = 30;
    this.supplies--;
    console.log("перезарядка...");
  },
  hurt() {
    this.health--;
    if (this.health === 0) {
      console.log("Ты проиграл");
    }
  },
};
