import fs from 'node:fs';
import path from 'node:path';
const out='dist';
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','about.html','collections.html','projects.html','contact.html','favicon.svg','robots.txt','sitemap.xml'])fs.copyFileSync(name,path.join(out,name));
fs.cpSync('assets',path.join(out,'assets'),{recursive:true});
