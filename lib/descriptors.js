import { Descriptor } from './descriptor.js'

export const descriptors = [
  {
    name: 'Bulgarian',
    locales: ['bg', 'bg-BG'],
    dictionary: {
      name: 'dictionary-bg',
      version: '2.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-70UDaLQbCThnaA1w14bmh8d6icEKyz2H6ud8edsa8GPVGD6tQ/vWu2JgrWG6EnbYDWvExGu+rQf3S1Z2BEngtQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './bulgarian',
      resolved: './dist/bg.js'
    }
  },
  {
    name: 'Breton',
    locales: ['br', 'br-FR'],
    dictionary: {
      name: 'dictionary-br',
      version: '2.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-DnaaqVvxb38yG8Lq7qxkhUf7WlNPHnLX2tkF8uUI1+VWWxQCH4KV7iYEU7JSeiZGGOe5h4XuDdYP8zeT7SZelQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Catalan',
    locales: ['ca'],
    dictionary: {
      name: 'dictionary-ca',
      version: '3.0.0',
      license: '(GPL-2.0 OR LGPL-2.1)',
      integrity: 'sha512-h+crBYqX/X7cEU3cFAEgwIojOZTAw1wW4ybYN5Aum9f1oZ+8ULO/GGglLs8m8UBBGtSVLyoYf0CdvX8WKt8VDg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Catalan (Valencia)',
    locales: ['ca-valencia', 'ca-ES-valencia'],
    dictionary: {
      name: 'dictionary-ca-valencia',
      version: '3.0.0',
      license: '(GPL-2.0 OR LGPL-2.1)',
      integrity: 'sha512-OtgUKPjxBgf/d/qTvzUx1nFV2gtmNt7x1egeUHLCzS8gxdhFI1tNkExvHQ/IlA8J6ZYkr4v8aJDBWSxsW4T2eQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Czech',
    locales: ['cs', 'cs-CZ'],
    dictionary: {
      name: 'dictionary-cs',
      version: '4.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-foYC1H71sxEx2QwppL4liEFAD+O5wlyJeZkTFqwz7ux85dI8kQFc8sDmWeObPEXsTtksiuwv+OOdfS2mFY1YVA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Welsh',
    locales: ['cy', 'cy-GB'],
    dictionary: {
      name: 'dictionary-cy',
      version: '2.0.0',
      license: 'LGPL-3.0',
      integrity: 'sha512-X85f8Vmx7twYjz1r5LxMYnlujXMt6iILvCujxQeUnjhylZWUESbpIV5IbLlEKLGzNvE2Edg7vdlISqcvrBz3Pg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Danish',
    locales: ['da', 'da-DK'],
    dictionary: {
      name: 'dictionary-da',
      version: '6.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-gn0IPPVzFljxOOewzLPIEFQKdsPrtgGHEGCWjJeZArl7tZJpGwjXdbvOpteq1GK6YBl66Ljn91EtuGMlV7+itA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './danish',
      resolved: './dist/dk.js'
    }
  },
  {
    name: 'German',
    locales: ['de', 'de-DE'],
    dictionary: {
      name: 'dictionary-de',
      version: '3.0.0',
      license: '(GPL-2.0 OR GPL-3.0)',
      integrity: 'sha512-0Xbq+YpWTscAL1e18aPPaqfG4goC2o9T595L/54v2OvOPC0/TJFFlclYanxuUoK73wutM5f9EgSuWGkvQXlOXw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './german',
      resolved: './dist/de.js'
    }
  },
  {
    name: 'German (Austria)',
    locales: ['de-AT'],
    dictionary: {
      name: 'dictionary-de-at',
      version: '3.0.0',
      license: '(GPL-2.0 OR GPL-3.0)',
      integrity: 'sha512-mCxRL8jOHITEuyN0BmvhlmSmHSpt37wFO0i78lS60IeBUiM901ERLUNWeF2ZS/+H4UvqiVLcLVN6zmOGKoPz2w==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './german',
      resolved: './dist/de.js'
    }
  },
  {
    name: 'German (Switzerland)',
    locales: ['de-CH'],
    dictionary: {
      name: 'dictionary-de-ch',
      version: '3.0.0',
      license: '(GPL-2.0 OR GPL-3.0)',
      integrity: 'sha512-B1s1Go9GIfYkwZvlOFfXiB1BH1wFZPZhoADPvu45N1Q4qd5vAKMU1vH/x00j9p75ZQa6AB3XHbghOsPMQSVvMg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './german',
      resolved: './dist/de.js'
    }
  },
  {
    name: 'Greek',
    locales: ['el', 'el-GR'],
    dictionary: {
      name: 'dictionary-el',
      version: '4.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-m8dWp+AIeGnUGBOBH7gx9YeQunMYdoKXKFvdSqzKPuJjz2Tb/pdW7oxG8lIKtASLHTCsf7RZoiuQbVRHJsSNCw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './greek',
      resolved: './dist/gr.js'
    }
  },
  {
    name: 'English',
    locales: ['en', 'en-US', 'en-001', 'en-WW'],
    dictionary: {
      name: 'dictionary-en',
      version: '4.0.0',
      license: '(MIT AND BSD)',
      integrity: 'sha512-3NHnE1uq33ZE/CIwaZ6gqxa4BnglHnxeAcTM0GJ7cmtRGcvX9InMK/IqLtYcUMFCUpUNgybH+DzkqdgAo3F1zg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './english',
      resolved: './dist/en.js'
    }
  },
  {
    name: 'English (Australia)',
    locales: ['en-AU'],
    dictionary: {
      name: 'dictionary-en-au',
      version: '3.0.0',
      license: '(MIT AND BSD)',
      integrity: 'sha512-whC8mFW7Crmoe2wH7cbBJwF6SFy3PGaExgZ1tU3J+qCUQdzJ3gdcD/PAXeWBBwAlsPA/Su0GGDxqp7uRM5lDVg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './english',
      resolved: './dist/en.js'
    }
  },
  {
    name: 'English (Canada)',
    locales: ['en-CA'],
    dictionary: {
      name: 'dictionary-en-ca',
      version: '3.0.0',
      license: '(MIT AND BSD)',
      integrity: 'sha512-MQ4VXbPv4+jDFcQq632RL2QmB+1Raq6jH/NWKTE4IsHcNXAb/l5106/xn1Dt63Ni2dRF9qfiBkk7myA//5clTA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './english',
      resolved: './dist/en.js'
    }
  },
  {
    name: 'English (United Kingdom)',
    locales: ['en-GB'],
    dictionary: {
      name: 'dictionary-en-gb',
      version: '3.0.0',
      license: '(MIT AND BSD)',
      integrity: 'sha512-gU/dwC9xGYPh/0CCcmGNXO8OwSgOySAqevcSXxADCsgUD+tr6OJ52u7XaC7No7dNssvdUSfVjkzcqLrRZq3kPA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './english',
      resolved: './dist/en.js'
    }
  },
  {
    name: 'English (South Africa)',
    locales: ['en-ZA'],
    dictionary: {
      name: 'dictionary-en-za',
      version: '3.0.0',
      license: 'LGPL-2.1',
      integrity: 'sha512-Bo8qvNz082qCk9OPhkHAT3G3GrbkANpcNAkhhNgcqnx3YSPpo7cOnr0BqYkzuDC4uUQ22Rpo8ym1R5dTvV512Q==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './english',
      resolved: './dist/en.js'
    }
  },
  {
    name: 'Esperanto',
    locales: ['eo'],
    dictionary: {
      name: 'dictionary-eo',
      version: '2.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-MeYTLA5v2SW8cq+2INe3oIf/Wl8WJm2+TKACqqMTbXg2lgC8WY2t9OrAhwidQS6TmeGtQZHlgJYkYZ4UTN3q3Q==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Estonian',
    locales: ['et', 'et-EE'],
    dictionary: {
      name: 'dictionary-et',
      version: '2.0.0',
      license: 'LGPL-2.1',
      integrity: 'sha512-MxyW1AvySPuXTrKikX9gXGj4R039kYd33xuJw4Pk5TllKitfZYp+rSiOVYI9azDW5foAXBYclPdkVglA5iNKQw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Basque',
    locales: ['eu', 'eu-ES'],
    dictionary: {
      name: 'dictionary-eu',
      version: '4.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-+xpwNbE5OikUzcH9qCm3VDhCLjFBBz0ad2NqhMzrBubtfKL/e3lJMllI1yKKIQcy30zIRUYY0iRGfGEJi2/OOQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Spanish',
    locales: ['es', 'es-ES'],
    dictionary: {
      name: 'dictionary-es',
      version: '4.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-8J3IYdaHYmkojxqhB+DneQpek6N/s3MwbVk3bPNGQSTBT5kxJtmbuiT0LSDP0Al6K9Vevo1sjspG8AGP9Yvxiw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Argentina)',
    locales: ['es-AR'],
    dictionary: {
      name: 'dictionary-es-ar',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-9TnVDGuA5FyHk/mtI00qm6hpzJnucfMEGIXZlyqhoOWZII/O2cTpXMFyeqTq8q74r4qVoTjZ0uWYLLKKmGI3pg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Bolivia)',
    locales: ['es-BO'],
    dictionary: {
      name: 'dictionary-es-bo',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-XVxllBrnWvJTv/8cZfPFdeiWFKShDLZX6dkI9nMmCcX3exTK4QObm2qyD8DnBwFJojqEk3QEwmkqhIudoX1hZw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Chile)',
    locales: ['es-CL'],
    dictionary: {
      name: 'dictionary-es-cl',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-STEyJltOuzi6XaCeHd6a7HaYYKBKb+A1DZxk5OXdFWU5GZsg+gUCyJT6vtuebAXYr192cvPDUnHRjVDPrJzvDA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Colombia)',
    locales: ['es-CO'],
    dictionary: {
      name: 'dictionary-es-co',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-ZEmmq2ogKRnJ6W3gqoOF5VTs+AGkrWrQTAlJ1JDcuR5O/Pf7oLArOQftyP88SHFnOoxs2HJoYh7AeP15Pxh8wA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Costa Rica)',
    locales: ['es-CR'],
    dictionary: {
      name: 'dictionary-es-cr',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-cKYYUfv64Kv/iP+DIL/9Zc18KJe6UZON38uQxMU9KmGEdNjt4XYToU8bBIqmV2v3AYS0uK2A21A/pkKqjk0FiA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Cuba)',
    locales: ['es-CU'],
    dictionary: {
      name: 'dictionary-es-cu',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-h2xb8nkwYhv+ajoxPxZGskMgMb/xx9KFwqdQGD7IK1fu8KBoDsl7qtDxUvGupRSwB8yY6WSuhbc5qppKlxF1PA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Dominican Republic)',
    locales: ['es-DO'],
    dictionary: {
      name: 'dictionary-es-do',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-6YV1r/WkdHQSxeQRbnJnSMx6lMTXVnmm4gix3kRwUtlCrXGlI00qLVOLfACzqTosrAFRNUe62m/Q8KgHRemyHQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Ecuador)',
    locales: ['es-EC'],
    dictionary: {
      name: 'dictionary-es-ec',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-w9hIrr2pKz117hykmAWItzm++EDziEo17zBTHrBD+fF5YL74r9pxMwpAuLj3j3XOLeSjt9nsrYaj9s2x4UpjOA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Guatemala)',
    locales: ['es-GT'],
    dictionary: {
      name: 'dictionary-es-gt',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-vQX+jIy0Kwe2uf5IMW3U4CaSUDObo6suOcCj42UZyp8GMQ3WGFAWgD0QEVhedp8l0GeAZcQ5zlCT+ALgfPhjmQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Honduras)',
    locales: ['es-HN'],
    dictionary: {
      name: 'dictionary-es-hn',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-eNg4pwEIExJUwbhC6nV5llCBnj/fL03C4SLAnVuxt3wMOgojkMbMHLfyUd/TNDQZOVjOuhc235NrXoSvfUVH5w==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Mexico)',
    locales: ['es-MX'],
    dictionary: {
      name: 'dictionary-es-mx',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-EkRPJAgPhY55oMiHqwEBavOpokkvXlOO5jOdwZJmV/B6w9pGpJxlm7YorgHjiB2HqyPGW0FRcOoJRBTspTXUEA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Nicaragua)',
    locales: ['es-NI'],
    dictionary: {
      name: 'dictionary-es-ni',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-RlVOynaDwRxi58a2Ho/B16ChQe2MTn5Qj9p1tMZTL94D++BCrB36tdF4rI5En9/PG3HLZenQfNSlDt+ya19RUw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Panama)',
    locales: ['es-PA'],
    dictionary: {
      name: 'dictionary-es-pa',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-i/ta1b6osDwq1Ssx20YHIlC1+wqEYjQEmLf1RGWc5vnEfIZsKc3WF7atMz9CU6YBaJtS5Lpu9avLlObfZrVGPA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Peru)',
    locales: ['es-PE'],
    dictionary: {
      name: 'dictionary-es-pe',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-57LMEGDzwGzdF1bkrvyEIM1YGwfqgJylncy4Sh/E6jVzKotm2Se+/6T49qBsARt2N2qtCcX/g7wHyNaehU8EeA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Philippines)',
    locales: ['es-PH'],
    dictionary: {
      name: 'dictionary-es-ph',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-9ue/bgg9C+j1tDRI3VCqySVG2XYqnzH2eN9mF5ytk6EPQiu1I3iKux99plzai7Erzva/ma1cHovwTZcoKoBFcw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Puerto Rico)',
    locales: ['es-PR'],
    dictionary: {
      name: 'dictionary-es-pr',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-KQU0g7HhkBcu4AN469kvBjsn6RdlFbJzstsvef4m5c/k8vWOt0szPE0BbK4LJwt1cnhK+dLvpZpt82hFJuZbyw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Paraguay)',
    locales: ['es-PY'],
    dictionary: {
      name: 'dictionary-es-py',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-RsYGP13G24rS7plZbtCm60r3FQFo+Cvc1M91mit9LgKY0hHGIvQecOyhuPgJPBd2ejMEhnu2G9m8/N/WOSmyTg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (El Salvador)',
    locales: ['es-SV'],
    dictionary: {
      name: 'dictionary-es-sv',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-eg1pUCNgYLRbR4KdFV80gP6TBosVRYQDUglMYl1JtWwcs3DWfB8sbAoXlp2iaodbpBPUcmZIMyVS4PTQSpR2MA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (United States of America)',
    locales: ['es-US'],
    dictionary: {
      name: 'dictionary-es-us',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-E9HNOl6RSG7eIDIhdIny9W+NkjMFlp/MaJ9IYOggGm3J4FPW2HRFEI6WPR6lC7rD5qxt1gNiDjhO55iGAULgrw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Uruguay)',
    locales: ['es-UY'],
    dictionary: {
      name: 'dictionary-es-uy',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-W2TyFkF0ITBNVZeHsSUOE8++BjOymASdqWFJgV+WBTr3NYFjA0oMuf9XJ2Xwcha4M0fXKbhhoqOAq7RZEYDenA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Spanish (Venezuela)',
    locales: ['es-VE'],
    dictionary: {
      name: 'dictionary-es-ve',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-1.1)',
      integrity: 'sha512-4AKVrQVlwCsfw+g7su3iHx8FcNMMXpC336NTyUp9/XL7wB6KGh/rp+e4qDQ3XiJMrJkG/ph/5+cRrh0h60YNiQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './spanish',
      resolved: './dist/es.js'
    }
  },
  {
    name: 'Persian',
    locales: ['fa', 'fa-IR'],
    dictionary: {
      name: 'dictionary-fa',
      version: '2.0.0',
      license: 'Apache-2.0',
      integrity: 'sha512-FEvC923119V9sJ5MKbXOssauLTHJ4zxwUhFLGaC1sETJASWF01Xcank24achQtm1f2eDzZgyWphzbjy3M5u2Lw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Faroese',
    locales: ['fo', 'fo-FO'],
    dictionary: {
      name: 'dictionary-fo',
      version: '3.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-s3u0/uTzWKx0JbisQPGDgEVCj+64Mmyip4cGMfx55IR+gYmhAEzO7zxofA2btbYxx58KgZJxHHkJNsGGqFD+6w==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'French',
    locales: ['fr', 'fr-FR'],
    dictionary: {
      name: 'dictionary-fr',
      version: '3.0.0',
      license: 'MPL-2.0',
      integrity: 'sha512-fhDRX1cRyHPA69GJg8R4XgNYgSQvbNHj3kr5UqvEG1OS5pJqH6P3GbO7wpTCwvr5KMQ0NxGIsXps9P5NyXRVEg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './french',
      resolved: './dist/fr.js'
    }
  },
  {
    name: 'Friulian',
    locales: ['fur', 'fur-IT'],
    dictionary: {
      name: 'dictionary-fur',
      version: '2.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-NzWvClOsKX11rMB1NTiANnldxiKRB0e/io0EQWBszA4TOlZHMJzotiXTd5Sz7+2czzYYqvvDt+3Swnb2unoe1A==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Western Frisian',
    locales: ['fy', 'fy-NL'],
    dictionary: {
      name: 'dictionary-fy',
      version: '2.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-+Anl7NRAG819rvB0ioX9P5lVa5O8QMin2sgx/cfPhE3MJeTJybN/5LcSqs1hHoZa9KoyU/obomcNTTuB+BQC1g==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Irish',
    locales: ['ga', 'ga-IE'],
    dictionary: {
      name: 'dictionary-ga',
      version: '3.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-zj4jYB3b9ZRpFwr5niIQn9QKdoS6ZWn55XcMgFshekGKTzUwcFPWct50jOMg8g8uy7eu3rMCx+ddqJERXU5/BQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './irish',
      resolved: './dist/ie.js'
    }
  },
  {
    name: 'Scottish Gaelic',
    locales: ['gd', 'gd-GB'],
    dictionary: {
      name: 'dictionary-gd',
      version: '2.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-Rzf16mwWu4pqyPo2JTKwwxEFNgBqSaY/u5KfGQrpBpLnFm0V1r0DfowyiW12dZtTIwWdYIWimQiZoCBLPSB8QA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Galician',
    locales: ['gl', 'gl-ES'],
    dictionary: {
      name: 'dictionary-gl',
      version: '3.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-6eTiIZLq5AQu87potynhkiUZAcmJLG7QgG51fyzPNZWBRrv45b2hld0BPnmwvvdzeNRi7PXQJjxRD+br0Z1DcA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Hebrew',
    locales: ['he', 'he-IL'],
    dictionary: {
      name: 'dictionary-he',
      version: '2.0.0',
      license: 'AGPL-3.0',
      integrity: 'sha512-lHtYauHajRL+gnS1iI50RANqn+ce1NnQwbxim2WD6PtX4NXME0vFiqkW/BFAae0kaT1+/86Ze15GAnwsTBBNGA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Croatian',
    locales: ['hr', 'hr-HR'],
    dictionary: {
      name: 'dictionary-hr',
      version: '2.0.0',
      license: '(LGPL-2.1 OR SISSL)',
      integrity: 'sha512-kQoiUkcZAbubqpLSh54cpMWJ8hWJI7UObCwrCzTbrulxdFseSmANPYnxH9CJ/Rz/WhMkNP6JW+Di/BnEN+LKGw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Hungarian',
    locales: ['hu', 'hu-HU'],
    dictionary: {
      name: 'dictionary-hu',
      version: '3.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-yTOarR7/KU/E1VbqzCru8hX0TMtQGWo6JF5CBBBbsqodzBhPxO+rHrmRSrXUMlcsPieqm3wWQtXuO/3OjQ95gw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './hungarian',
      resolved: './dist/hu.js'
    }
  },
  {
    name: 'Icelandic',
    locales: ['is', 'is-IS'],
    dictionary: {
      name: 'dictionary-is',
      version: '2.0.0',
      license: 'CC-BY-SA-3.0',
      integrity: 'sha512-XsZP6pjiWL+VQk8O6BblwCmQGw5vQcLTIgMw2q1EVQ7hlJi0Y+hg0vvvsn4YY5qvfXBltnY2j22tkGezG494rg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Italian',
    locales: ['it', 'it-IT'],
    dictionary: {
      name: 'dictionary-it',
      version: '2.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-klTygBjKRYKEeDmqLfDpI9eDCj334TQhbq2zExKREV4CMPiUsnXnO/0CGMTiRTRL+Wk+qXd0fKfEZbgw+gnjHw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './italian',
      resolved: './dist/it.js'
    }
  },
  {
    name: 'Georgian',
    locales: ['ka', 'ka-GE'],
    dictionary: {
      name: 'dictionary-ka',
      version: '2.0.0',
      license: 'MIT',
      integrity: 'sha512-5zzK11IhrybJaon/rZltNbOELJ7NPviRt9I9ATKEiCkRGSN/PibF0gCvY3x9bknjWeRK+PeNHP8CM6ZG7W5BeQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Korean',
    locales: ['ko', 'ko-KR'],
    dictionary: {
      name: 'dictionary-ko',
      version: '2.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-0/0UdG9/SqUzGUcuTLZsM0BjSTagDiWdNQ51H1BdDKW7TqR7WjfBhipg+YLAKvyCG2Is6dPwCSoBIPUgOgPdxw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Luxembourgish',
    locales: ['lb', 'lb-LU'],
    dictionary: {
      name: 'dictionary-lb',
      version: '4.0.0',
      license: 'EUPL-1.1',
      integrity: 'sha512-nshdpJptRdQ3C0J28rtA/uK+dKa03TWXLOOgzvZF6SiN1NWRRG+txt86v/U5LnfGjDOflC1l2+aP5Zp78Bx8Dw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Lithuanian',
    locales: ['lt', 'lt-LT'],
    dictionary: {
      name: 'dictionary-lt',
      version: '2.0.0',
      license: 'BSD-3-Clause',
      integrity: 'sha512-NPuz8zyQn92yX1tc/W7yADmHuTpPQ6rNY+LWiWyWFJvqV6jQgg/Ag7jsY9LfVFIiv2uQ/LgrIHC5/XlhHcgs4Q==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './lithuanian',
      resolved: './dist/lt.js'
    }
  },
  {
    name: 'Latgalian',
    locales: ['ltg', 'ltg-LV'],
    dictionary: {
      name: 'dictionary-ltg',
      version: '2.0.0',
      license: 'LGPL-2.1',
      integrity: 'sha512-rMDReYcZjpyEVdNmGAKgp4aJoiK8V3PmauYjtNhFNFIyMeh0X5deeJA655weoHmGfxR5nhABesCXuUZ3/rgbCw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Latvian',
    locales: ['lv', 'lv-LV'],
    dictionary: {
      name: 'dictionary-lv',
      version: '2.0.0',
      license: 'LGPL-2.1',
      integrity: 'sha512-jtPBAmcXELIj6br9Tmi8CwNgiE8AKn7BrhdQo7i+9kqkWJYKwDHTthVBe5FsvafRCWL7LAt2l70f4BLEJfkHBw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Macedonian',
    locales: ['mk', 'mk-MK'],
    dictionary: {
      name: 'dictionary-mk',
      version: '2.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-fZmbMsQqVKFJn71JCW6J6uwoNfEurHy5P/JYLQa73KNuDH8f/3fEVpizzg9Tdb40jG1a59dEHpKDyhHyTbVNDQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Mongolian',
    locales: ['mn', 'mn-MN'],
    dictionary: {
      name: 'dictionary-mn',
      version: '3.0.0',
      license: 'LPPL-1.3c',
      integrity: 'sha512-c1IuZROs4XwkmOi+uH/wR0ouzlRayhyVbLgRb0lyDFlT9G79c+U1lq218ldL0ykKmnH4hjcEXTitfr4oDwg/tQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Norwegian Bokmål',
    locales: ['no', 'no-NO', 'nb', 'nb-NO'],
    dictionary: {
      name: 'dictionary-nb',
      version: '3.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-YemD394r1z5BrC1HUsV7iF6zLIalFBbcDfMCn4OV+KP3fRqC5VBLuohGBGmKnCmwwXSJmhOjmzaQY2cbK61iFw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './norwegian',
      resolved: './dist/no.js'
    }
  },
  {
    name: 'Low German',
    locales: ['nds', 'nds-DE'],
    dictionary: {
      name: 'dictionary-nds',
      version: '2.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-5ZZmsNFsNoVo9g6B3IcogDG4UE8vSyom2+HHizNTQ7FFBphrTpSGZwIYguKD7zAbeqwIiKaJg9KsIQgSDjuw3Q==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Nepali',
    locales: ['ne', 'ne-NP'],
    dictionary: {
      name: 'dictionary-ne',
      version: '2.0.0',
      license: 'LGPL-2.1',
      integrity: 'sha512-iSKsMzeY2ELJyLInAEcYVMyR8i7M055erWoIZ2IeVlyegL2x7S5TkQ0TQ8ZpfNELBIAplxi7AuPmGJBdCXyTTQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './nepali',
      resolved: './dist/np.js'
    }
  },
  {
    name: 'Dutch',
    locales: ['nl', 'nl-NL'],
    dictionary: {
      name: 'dictionary-nl',
      version: '2.0.0',
      license: '(BSD-3-Clause OR CC-BY-3.0)',
      integrity: 'sha512-BJRu3jT52mEjDunbpC9Y1UiQJy22VUuA/N6s2Oc5KuN+hHS3MDCoTQiyjifePd2rlHtZSy0fGZaB0qXiCGh7Vw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './dutch',
      resolved: './dist/nl.js'
    }
  },
  {
    name: 'Norwegian Nynorsk',
    locales: ['nn', 'nn-NO'],
    dictionary: {
      name: 'dictionary-nn',
      version: '3.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-nglKcs6cDzcOK0eBStDMx11PIz6q4WPbSIPfQNRQ7K9KIoMmsEebao0OkGFUxlFEa+P/NT1nTrREDdunobJshw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './norwegian',
      resolved: './dist/no.js'
    }
  },
  {
    name: 'Occitan',
    locales: ['oc', 'oc-FR'],
    dictionary: {
      name: 'dictionary-oc',
      version: '2.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-klcMhuJd+fpQsN+EUi72+hHcL9K2/lcX/vggEQxUgGtkz2EjFEF9dj/k3ihYWlAg3ANAvXwi8etZbL8yvN0N2w==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Polish',
    locales: ['pl', 'pl-PL'],
    dictionary: {
      name: 'dictionary-pl',
      version: '2.0.0',
      license: '(GPL-3.0 OR LGPL-3.0 OR MPL-2.0)',
      integrity: 'sha512-jg1j4DM12i6oyp34Re5UeVYZAh2u4Y0Qi8zUfLVQjRmUQA8PsHO41ShoZLDwcQm7mWfeTeZjDPLv9wygPdqj3Q==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Portuguese (Brazil)',
    locales: ['pt', 'pt-BR'],
    dictionary: {
      name: 'dictionary-pt',
      version: '4.0.0',
      license: '(LGPL-3.0 OR MPL-2.0)',
      integrity: 'sha512-ryJRhAtsaunBWw9grYXmVFftfab8+BCQ5wwh7fUzWO0oYEeMuR1lW2ubu1AHdvxOL32XP+u5wW/XhbFuoFuq8Q==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './portuguese',
      resolved: './dist/pt.js'
    }
  },
  {
    name: 'Portuguese (Portugal)',
    locales: ['pt-PT'],
    dictionary: {
      name: 'dictionary-pt-pt',
      version: '2.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-N44fxg2uDhF71Ql20zpe6BpdMlVkOT7oyjltuOhRwb2mx2SX3CJ/lqUE6+/HKZdqaxggqNbM/qv02a+Sa1XQiA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './portuguese',
      resolved: './dist/pt.js'
    }
  },
  {
    name: 'Romanian',
    locales: ['ro', 'ro-RO'],
    dictionary: {
      name: 'dictionary-ro',
      version: '3.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-kcR0BSFq16g1jCKpn15jpyio3ztMMS+O3PK4TE8ird8XjBgSAr2RRH0VoLG4uzMG1CFQNix/cHLne1wBu3CcTg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './romanian',
      resolved: './dist/ro.js'
    }
  },
  {
    name: 'Russian',
    locales: ['ru', 'ru-RU'],
    dictionary: {
      name: 'dictionary-ru',
      version: '3.0.0',
      license: 'BSD-3-Clause',
      integrity: 'sha512-tigem0CDnNpxEciW6ktwVH3wWB4FYpuvpwA6IR6UlF7bVu2kez6vOejVNyZgBX1TJIjuYTCTuLxzg/YOls2mRQ==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './russian',
      resolved: './dist/ru.js'
    }
  },
  {
    name: 'Kinyarwanda',
    locales: ['rw', 'rw-RW'],
    dictionary: {
      name: 'dictionary-rw',
      version: '2.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-w2d+lVvabiPvGxxEnvozMl5ZpZdGVm5fZZnf7XlTZcZ1KtTtjQu56lj2C3NhLj25P7OLU/IPI/MpqK7fH88d2w==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Slovak',
    locales: ['sk', 'sk-SK'],
    dictionary: {
      name: 'dictionary-sk',
      version: '2.0.0',
      license: '(GPL-2.0 OR LGPL-2.1 OR MPL-1.1)',
      integrity: 'sha512-rC+CQwuwURS7Cd2MWa5KXoFTdfZ7bAzgaCUM/4nGZxe1ySDksoYppGzX1vcYObqTCiQwKmsP4GwwGk+Ygsrzkg==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Slovenian',
    locales: ['sl', 'sl-SI'],
    dictionary: {
      name: 'dictionary-sl',
      version: '3.0.0',
      license: '(GPL-3.0 OR LGPL-2.1)',
      integrity: 'sha512-+i2WB6ZFOiejKS0XCo24OMG2aM2mqZfEX7zF98H1lFhllxb+EyQvFgQo92nCEA0gwRpfyVWRyQPMJBVIZU10iw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Swedish',
    locales: ['sv', 'sv-SE'],
    dictionary: {
      name: 'dictionary-sv',
      version: '4.0.0',
      license: 'LGPL-3.0',
      integrity: 'sha512-GJM7IHfEHmSUecp9EbwX5efQe6CVdytFy5vDIJTT4dEDtwuEMyJGs7nqGuuK44Dtic36p4f0duWW5WogK9yzBw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './swedish',
      resolved: './dist/se.js'
    }
  },
  {
    name: 'Swedish (Finland)',
    locales: ['sv-FI'],
    dictionary: {
      name: 'dictionary-sv-fi',
      version: '2.0.0',
      license: 'LGPL-3.0',
      integrity: 'sha512-T28/Q5u+utNJjso/deDx+8pb88IhevxTL3c3RyJhh6syOkv5uDoanl7shJFRk9UTL9QsebYP1KSb3+wDagPpZA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './swedish',
      resolved: './dist/se.js'
    }
  },
  {
    name: 'Turkmen',
    locales: ['tk', 'tk-TM'],
    dictionary: {
      name: 'dictionary-tk',
      version: '3.0.0',
      license: 'Apache-2.0',
      integrity: 'sha512-2piEIPqTHhKZUGFi7Pvkk/KpXHHJx9hCCajxcRyLqcnX5p4MIOC84qZTlDPGEkR2tY9FIU7Dha01HvqIoLr1Tw==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  },
  {
    name: 'Turkish',
    locales: ['tr', 'tr-TR'],
    dictionary: {
      name: 'dictionary-tr',
      version: '2.0.0',
      license: 'MIT',
      integrity: 'sha512-Du0PHWIqAlNheOUEDgGea0lmEV4L/T57EvG4231IUeSWySSDZ8wj5TKo2Vlkx7j9RVD07XqZQLDCtOZvhll6xA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './turkish',
      resolved: './dist/tr.js'
    }
  },
  {
    name: 'Ukrainian',
    locales: ['uk', 'uk-UA'],
    dictionary: {
      name: 'dictionary-uk',
      version: '4.0.0',
      license: 'GPL-3.0',
      integrity: 'sha512-AgeLt1iIi3lvUQ8DpEvqhikPvnwF+ffYLdjP0lrh+iOhCwTMhmDRvczyPqIksmHAWxRkFfgDcn7Qw/23GJ/GvA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: {
      name: '@orama/stemmers',
      version: '3.1.18',
      license: 'Apache-2.0',
      integrity: 'sha512-xXs5fpiUvBs4jJZtnayJmUSomdxxiwwwvTbAzPHSyI6geLM7bxXHgpVlYz4JeMBycHX8bHF7j9m7F35BxhuZ8g==',
      publishers: ['micheleriva'],
      entryPoint: './ukrainian',
      resolved: './dist/uk.js'
    }
  },
  {
    name: 'Vietnamese',
    locales: ['vi', 'vi-VN'],
    dictionary: {
      name: 'dictionary-vi',
      version: '3.0.0',
      license: 'GPL-2.0',
      integrity: 'sha512-r7QNGoJvKsLbxc4/59QP2pvJd7X08/8OWtZxiTfQGLwtl7nLw9F/IveWiUR46HBzSjws0L33fKf9UtlSrcYbRA==',
      publishers: ['wooorm'],
      aff: 'index.aff',
      dic: 'index.dic'
    },
    stemmer: null
  }
].map((x) => new Descriptor(x))
