import { ApiProperty } from '@nestjs/swagger';
import { EsPageMetaInterface } from '../interfaces/es-page-meto.interface';

export class EsPageMetaDto {
  @ApiProperty({ description: '分页标识' })
  readonly lastSort: string;

  @ApiProperty({ description: '分页数量' })
  readonly pageSize: number;

  @ApiProperty({ description: '总数量' })
  readonly itemCount: number;

  @ApiProperty({ description: '是否有下一页' })
  hasNextPage: boolean;

  constructor({ esPageOptionsDto, itemCount }: EsPageMetaInterface) {
    this.pageSize = esPageOptionsDto.pageSize;
    this.itemCount = itemCount;
    this.lastSort = esPageOptionsDto.lastSort;
    this.hasNextPage = this.lastSort !== '';
  }
}
