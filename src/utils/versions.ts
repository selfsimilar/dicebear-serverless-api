import { Version } from '../types.js';
import { config } from '../config.js';

export async function getVersions(): Promise<Record<string, Version>> {
  const versions: Record<string, Version> = {};

  if (config.versions.includes(5)) {
    versions['5.x'] = await import('@dicebear/api-5');
  }

  if (config.versions.includes(6)) {
    versions['6.x'] = await import('@dicebear/api-6');
  }

  if (config.versions.includes(7)) {
    versions['7.x'] = await import('@dicebear/api-7');
  }

  if (config.versions.includes(8)) {
    versions['8.x'] = await import('@dicebear/api-8');
  }

  if (config.versions.includes(9)) {
    versions['9.x'] = await import('@dicebear/api-9');
  }

  return versions;
}
