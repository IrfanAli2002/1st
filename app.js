const obj = [
    {
    "name": "Irfan",
    "country": "Pakistan",
    "group": "A"
  },
  {
    "name": "Ibrar",
    "country": "Oman",
    "group": "B"
  },
  {
    "name": "Bilal",
    "country": "UAE",
    "group": "C"
  },
  {
    "name": "Daniyal",
    "country": "China",
    "group": "D"
  },
  {
    "name": "Ali",
    "country": "USA",
    "group": "E"
  }
];

const result = obj.map(function(x){
    return x.name
});

console.log(result);