import { execaCommandSync as exec } from 'execa';
import { copyPackageFiles, rmDist, chProjectDir } from 'lion-system';

chProjectDir(import.meta.url)
rmDist();
exec('tsc');
exec('tsc-alias');
await copyPackageFiles();
