import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from '../interfaces/page-meta-dto-parameters.interface';

export class PageMetaDto {
  @ApiProperty({ description: '当前页' })
  readonly page: number;

  @ApiProperty({ description: '每页条数' })
  readonly take: number;

  @ApiProperty({ description: '总条数' })
  readonly itemCount: number;

  @ApiProperty({ description: '总页数' })
  readonly pageCount: number;

  @ApiProperty({ description: '是否有上一页' })
  readonly hasPreviousPage: boolean;

  @ApiProperty({ description: '是否有下一页' })
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
