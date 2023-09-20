
# infoBerg
Unofficial [Codeberg.org](https://codeberg.org/) module.

## 🛠 Installation
You can download the module using NPM or PNPM.
`npm i infoberg` | `pnpm i infoberg`

## 📁 Usage (User Info)
- User information fetch;
```js
const infoBerg = require('infoberg');

infoBerg.user.getInfo('queaxtra').then((data) => {
    console.log(data);
});
```

```json
{
  username: 'Queaxtra',
  full_name: 'Real Queaxtra',
  email: 'queaxtra@noreply.codeberg.org',
  avatar_url: 'https://codeberg.org/avatars/fa98ee3918d9b6ddb73be96d04c12e611d49184525e7482c7fe3e6ffa385388e',
  location: 'Turkey',
  website: 'https://www.queaxtra.me/',
  description: 'Front-end Developer',
  followers_count: 0,
  following_count: 0
}
```

- Fetching user repositories;
```js
const infoBerg = require('infoberg');

infoBerg.user.getRepositories('queaxtra').then((repositories) => {
    console.log(repositories);
});
```

```json
[
  {
    name: 'queaxtra.me',
    description: 'Offical codes of my website.',
    language: 'Svelte',
    stars: 0,
    forks: 0,
    url: 'https://codeberg.org/Queaxtra/queaxtra.me'
  },
  {
    name: 'infoBerg',
    description: 'Unofficial Codeberg.org module.',
    language: 'Javascript',
    stars: 0,
    forks: 0,
    url: 'https://codeberg.org/Queaxtra/infoBerg'
  },
]
```
## 📁 Usage (Orgs Info)
- Organization information fetch;
```js
const infoBerg = require('infoberg');

infoBerg.orgs.getInfo('unoxdevs').then((data) => {
    console.log(data);
});
```

```json
{
  name: 'UnoxDevs',
  avatar_url: 'https://codeberg.org/avatars/c68aea10222879d4f31526976c6d99640c9f6cb9306396897c9547ecbef202b4',
  description: 'Think, Plan, Do.',
  website: 'https://unoxdevs.fun/',
  location: 'Turkey'
}
```

- Fetching organization repositories;
```js
const infoBerg = require('infoBerg');

infoBerg.orgs.getRepositories('unoxdevs').then((repositories) => {
    console.log(repositories);
});
```

```json
[
  {
    name: 'website',
    description: 'Website source codes.',
    language: 'Svelte',
    stars: 0,
    forks: 0,
    url: 'https://codeberg.org/UnoxDevs/website'
  },
  {
    name: 'blog',
    description: 'It is the source code of our own blog site.',
    language: 'Svelte',
    stars: 0,
    forks: 0,
    url: 'https://codeberg.org/UnoxDevs/blog'
  }
]
```
## ✨ Note
Please contact us if you have encountered a bug or error.
https://t.me/unoxdevs