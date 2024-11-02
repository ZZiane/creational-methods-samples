import { Person } from "./samples/sample1";
import { Administrator } from "./samples/sample2";

console.log(Person.builder().firstName("John").lastName("Doe").build());
console.log(new Person().withFirstName("Bernard").withLastName("Eich"));
const p = new Person();
p.setFirstName("James");
console.log(p.getFirstName());

console.log(
  (Administrator as any).builder().username("Admin").role("Admin").build()
);
console.log((new Administrator() as any).withUsername("xyz").withRole("abc"));
