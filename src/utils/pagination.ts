import { config } from '../config/config';

export function limit(size: number | undefined): number {
  return size ? size : config.pagination.size;
}

export function offset(page: number | undefined, size: number | undefined): number {
  if (!page || !size) {
    return config.pagination.page;
  }

  return (page - 1) * size;
}

export function buildMeta(size: number, total: number, page: number | undefined) {
  return { total, size, page: Number(page ? page : 1) };
}
