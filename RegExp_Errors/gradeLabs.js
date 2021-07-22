let gradeLabs = (arr) => {
  try {
    for (let obj of arr) {
      if (!obj.hasOwnProperty("runLun") || typeof obj.runLab !== "function") {
        console.log(runLab(3));
      }
    }
  } catch (e) {
    throw new TypeError("lab.runLub is not a functions");
  }
  console.log(studentLabs2);
};

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];
gradeLabs(studentLabs2);
