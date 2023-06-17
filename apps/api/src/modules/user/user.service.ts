import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({ where: { id }, data: updateUserInput });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
}
