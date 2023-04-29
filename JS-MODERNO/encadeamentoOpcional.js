const user = {
  name: "John Doe",
  email: "doejohn@gmail.com",
  friends: [
    {
      name: "Mary",
      adrress: {
        street: "some street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// aqui retorna um erro porque não existe phone.ddd na sequencia de friends

//               ||| console.log(user.friends[0].phone.ddd); |||

// aqui NÃO retorna erro por causa do encadeamento opcional que para quando a propriedade é undefined
console.log(user?.friends[0]?.phone?.ddd);
console.log(user?.brothers?.length);

console.log(user.brothers?.[5]?.name);
