import { Register } from './register.js';

export class Registers {
  private registers: Register[] = [];

  public push(register: Register): Register {
    this.registers.push(register);

    return register;
  }

  public update(register: Register): Register {
    this.registers.forEach((item) => {
      if (item.id === register.id) {
        item.name = register.name;
        item.age = register.age;
        item.occupation = register.occupation;
      }
    });

    return register;
  }

  public list(): readonly Register[] {
    return this.registers;
  }

  public remove(register: Register): Register {
    this.registers.splice(register.id - 1, 1);
    return register;
  }
}
