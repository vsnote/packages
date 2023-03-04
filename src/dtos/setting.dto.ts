import { ApiProperty } from '@nestjs/swagger';

export class SettingDto {
  // 服务器时间戳
  @ApiProperty({ description: '服务器时间戳' })
  serverTime: number;

  // 链信息
  @ApiProperty({ description: '链' })
  chain: ChainInfoDto[];

  // erc20
  @ApiProperty({ description: '代币' })
  erc20Tokens: Erc20TokenDto[];

  // collection
  @ApiProperty({ description: '系列分类' })
  collectionCategories: CollectionCategoryDto[];
}

class ChainInfoDto {
  @ApiProperty({ description: '链名称' })
  chain: string; // 链名

  @ApiProperty({ description: '链 id' })
  chainId: number; // 链id

  @ApiProperty({ description: '节点url' })
  rpcNodeUrl: string; // 节点url

  @ApiProperty({ description: '交易合约地址' })
  nftTradeAddr: string; // 交易合约地址
}

class Erc20TokenDto {
  @ApiProperty({ description: '代币地址' })
  address: string; // 代币地址

  @ApiProperty({ description: '代币名' })
  name: string; // 代币名

  @ApiProperty({ description: '代币标识' })
  symbol: string; // 代币标识

  @ApiProperty({ description: '精度' })
  decimal: number; // 精度
}

class CollectionCategoryDto {
  @ApiProperty({ description: '分类 id' })
  id: number;

  @ApiProperty({ description: '分类名' })
  name: string;
}
