import _ from 'lodash';

// 获取 db 服务模式
export function getOrderPattern(pattern: string) {
  return `order:${pattern}`;
}

// 映射 metadata 字段
export function parseMetadata(metadata: any, map: any) {
  const result = {};
  Object.keys(map).forEach((key) => {
    // 用 | 分割
    const keys = map[key].split('|');
    // 循环判断多个映射字段
    if (Array.isArray(keys)) {
      for (const item of keys) {
        const value = _.get(metadata, item);
        if (value) {
          result[key] = value;
        }
      }
    }
  });
  // 判断 imgUrl 是否存在
  if (result['imgUrl']) {
    // 如果 nft 图片地址包含 ipfs://，则替换为 https://ipfs.io/ipfs/
    result['imgUrl'] = result['imgUrl'].replace('ipfs://', 'https://ipfs.io/ipfs/');
  }
  return result;
}

// 对 metadata 的属性进行排序
export function sortMetadata(metadata: any) {
  const rules = ['properties.attributes', 'attributes'];
  rules.forEach((rule) => {
    const attr = _.get(metadata, rule);
    if (attr && Array.isArray(attr)) {
      // 对属性的 trait_type 进行排序
      const sortedMetadata = attr.sort((a, b) => {
        return a.trait_type.localeCompare(b.trait_type);
      });
      metadata[rule] = sortedMetadata;
    }
  });

  return metadata;
}
