import { Controller, Post, UseGuards } from '@nestjs/common'; // Importa os decoradores e exceções necessários do pacote '@nestjs/common'.
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/questions') // Declara a classe como um controlador responsável pelo endpoint '/accounts'.
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {} // Construtor que aceita uma instância do serviço Prisma.

  @Post() // Declara que este método responde a requisições HTTP POST.
  async handle() {
    return 'ok';
  }
}
