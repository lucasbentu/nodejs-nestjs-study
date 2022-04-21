import { Injectable } from '@nestjs/common';
import { Register } from '../models/register.js';
import { Registers } from '../models/registers.js';

@Injectable()
export class RegisterService {
  private registers: Registers = new Registers();

  findAll(): Registers {
    return this.registers;
  }

  findOne(id: number): Register {
    const [result] = this.registers.list().filter((item) => item.id === id);

    if (!result) {
      throw Error('Cadastro não encontrado.');
    }

    return result;
  }

  update(id: number, register: Register): Register {
    const [result] = this.registers.list().filter((item) => item.id === id);

    if (!result) {
      throw Error('Cadastro não encontrado.');
    }

    const resultModificad = {
      id: result.id,
      name: register.name,
      age: register.age,
      occupation: register.occupation,
    };

    return this.registers.update(resultModificad);
  }

  createRegister(register: Register): Register {
    if (!register.name || !register.age || !register.occupation) {
      throw Error(
        `Você precisa passar os campos corretos. { name, age, occupation }`,
      );
    }

    const regiter = {
      id: this.registers.list().length + 1,
      name: register.name,
      age: register.age,
      occupation: register.occupation,
    };

    return this.registers.push(regiter);
  }

  remove(id: number): Register {
    const [result] = this.registers.list().filter((item) => item.id === id);

    if (!result) {
      throw Error('Cadastro não encontrado.');
    }

    return this.registers.remove(result);
  }
}
