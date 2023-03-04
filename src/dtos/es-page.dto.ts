import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { EsPageMetaDto } from './es-page-meta.dto';

export class EsPageDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty({ type: () => EsPageMetaDto })
  readonly meta: EsPageMetaDto;

  constructor(data: T[], meta: EsPageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
