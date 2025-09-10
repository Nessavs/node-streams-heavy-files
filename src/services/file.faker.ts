const { faker } = require('@faker-js/faker');

const nome = faker.person.firstName();
const email = faker.internet.email(nome);
console.log(`Nome: ${nome}`); console.log(`Email: ${email}`);