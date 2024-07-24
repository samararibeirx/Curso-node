import path from 'path';
import url from 'url';
import { promises as fs } from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __diname = path.dirname(__filename);

await fs.mkdir(path.join(__dirname,'lojas','201','funcionarios'))