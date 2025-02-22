// Objects with arrays.

const client = {
  code: "ABC123",
  name: "John",
  address: {
    street: "street1",
    number: 123,
    complement: "apt H0101",
    reference: [
      { name: "Hospital x", nearby: true },
      { name: "Shopping x", nearby: false },
      { name: "Grocerie Store x", nearby: true },
    ],
  },
};
console.log(client);
console.log("\n", client.address.street);
console.log("\n", client.address.reference[1].nearby);
