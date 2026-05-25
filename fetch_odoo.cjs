const https = require('https');
https.get('https://www.odoo.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const fontMatches = data.match(/font-family[^;>}]*/gi);
    console.log("Inline fonts:");
    console.log([...new Set(fontMatches)].slice(0, 20));
    
    console.log("Stylesheets:");
    const links = data.match(/<link[^>]*rel="stylesheet"[^>]*>/gi);
    console.log(links);
  });
}).on('error', err => console.log('Error: ', err.message));
