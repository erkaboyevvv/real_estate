import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  users: any;
    constructor(){
        super({
            datasources:{
                db:{
                    url: "postgresql://postgres:7683@localhost:5432/real-estate?schema=public"
                },
            },
        })

    }
  async onModuleInit() {
    await this.$disconnect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
