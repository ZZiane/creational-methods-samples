import { Builder, Getter, Setter, With } from "creational-methods";

@Builder
@With
@Setter
@Getter
export class Administrator {
  username: string = "";
  role: string = "";
}
