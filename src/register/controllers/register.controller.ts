import {
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  Controller,
} from '@nestjs/common';
import { RegisterService } from '../services/register.service.js';
import { Register } from '../models/register.js';
import { Registers } from '../models/registers.js';

@Controller('register')
export class RegisterController {
  constructor(private readonly register: RegisterService) {}

  @Get()
  findAll(): Registers {
    return this.register.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.register.findOne(+id);
    } catch (error) {
      return {
        status: 404,
        message: error.message,
      };
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() register: Register) {
    try {
      return this.register.update(+id, register);
    } catch (error) {
      return {
        status: 404,
        message: error.message,
      };
    }
  }

  @Post()
  create(@Body() register: Register) {
    try {
      return this.register.createRegister(register);
    } catch (error) {
      return {
        status: 422,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.register.remove(+id);
    } catch (error) {
      return {
        status: 404,
        message: error.message,
      };
    }
  }
}
