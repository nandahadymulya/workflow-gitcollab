const aboutMe = {
  firstName: "Nanda",
  lastName: "Hady Mulya",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 65,
  height: 170,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100 <= this.weight;
  },
};

console.log(Person.fullname());
console.log(Person.isWeightIdeal());

const countries = {
  ID: {
    province: ["Sumatera Utara", "Sumatera Barat", "Riau"],
    city: ["Aceh", "Padang", "Pekanbaru"],
  },
  MY: {},
  TH: {
    province: ["Bangkok", "Chiang Mai", "Phuket"],
  },
};

console.log(countries?.TH?.province ?? "Not Found");
