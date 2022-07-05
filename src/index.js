import React from 'react';
import { createRoot } from 'react-dom/client';
const heading = React.createElement('h1', { id: 'title', className: 'header btn btn-danger' }, 'Biodata Perusahaan');
const listItem1 = React.createElement('li', null, 'Nama : Matius Rimbe');
const listItem2 = React.createElement('li', null, 'Bidang : Pemrograman');
const listItem3 = React.createElement('li', null, 'Tagline : Belajarlah mulai dari Basic');
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
const container = React.createElement('div', null, [heading, unorderedList]);
const root = createRoot(document.getElementById('root'));
root.render(container);
