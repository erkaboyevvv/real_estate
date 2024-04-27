import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('main')
export class AppController {

  mainContext = `
  <div style="height: 100%; width: 100%; background-color: black; display: flex; text-align: center; justify-content: center; align-items: center;">
      <h1 style="color: white; animation: colorchange 3s infinite;">Server started successfully</h1> <style>
      @keyframes colorchange {
          0% { color: white; font-size: 22px; }
          50% { color: white; font-size: 23px; }
          100% { color: white; font-size: 22px; }
      }
  </style>
  </div>
  `;

  @Get()
  main() {
    return this.mainContext;
  }
}
