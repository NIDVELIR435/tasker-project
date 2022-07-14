import { ApiProperty } from '@nestjs/swagger';

export class ErrorExceptionDto {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  error: string;
}
