import { Builder, Getter, Setter, With } from "creational-methods";

@Builder
@With
@Setter
@Getter
export class Person {
  [x: string]: any;
  static [x: string]: any;
  firstName: string = "";
  lastName: string = "";
}
