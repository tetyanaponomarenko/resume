// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: "600$ в місяць",
  address: 'Ukraine, Kharkiv',
}

var footer = {
  social: {

    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    //                  ↑↑ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Good team player, every colleaque is a friend to me'
      },
      experience: {
        title: 'Other experience',
        text: 'Analyzing by simple mathematics models and preparing probability for such events like:'
      },
    },

    footer,
  })
})













// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    //                  ↑↑ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,


    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,

        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git',
          point: 10,
        },
        {
          name: 'Terminal & NPM',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Travel',
          isMain: true,
        },
        {
          name: 'Fishing',
          isMain: false,
        },
        {
          name: 'Swimming',
          isMain: true,
        },
      ]
    },


    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    //                  ↑↑ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Kharkiv University of Economics',
          isEnd: true,
        },
        {
          name: 'Kharkiv Medical University',
          isEnd: false,
        },
        {
          name: 'Kharkiv Aviation University',
          isEnd: false,
        },
        {
          name: 'Kharkiv Polytechnic University',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Economics',
          id: (1),
        },
        {
          name: 'Programming',
          id: (2),
        },
        {
          name: 'Medicine',
          id: (3),
        },
      ]
    },

    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    //                  ↑↑ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Airbnb competitor. High-load application for searching apartmens',
              stacks: [
                {
                  name: 'Raect.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: "Background verification - is a feature that provides users to prove that they are real persons",
                },
                {
                  name: "Preparing SEO optimized pages",
                },
              ],
              stackAmount: 39,
              awardAmount: 33,
            },
          ],
        },
      ],
    },

    footer,
  })
})



// Підключаємо роутер до бек-енду



module.exports = router
