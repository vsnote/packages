import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class EsPageOptionsDto {
  @ApiProperty({ description: '链 ID' })
  @IsInt()
  readonly chainId: number;

  @ApiPropertyOptional({ description: '分页标识' })
  @IsString()
  @IsOptional()
  public lastSort: string;

  @ApiPropertyOptional({
    description: '分页数量',
    minimum: 1,
    maximum: 100,
    default: 20
  })
  @IsOptional()
  readonly pageSize: number = 20;
}
