import icecream from '../../assets/images/previewProjects/Ice-Cream.png';
import filmotekaImg from '../../assets/images/previewProjects/filmoteka.png';
import webStudioImg from '../../assets/images/previewProjects/webStudio.png';
import clickergame from '../../assets/images/previewProjects/cliker-game.jpg';
import imageFinder from '../../assets/images/previewProjects/imageFinder.png';
import moviesImg from '../../assets/images/previewProjects/movies.png';
import phonebookImg from '../../assets/images/previewProjects/phonebook.png';

export const ownProjects = [
  {
    id: 'id-7',
    label: 'Clicker-Game',
    link: 'https://shevchenkool.github.io/Clicker-Game/',
    repo: 'https://github.com/shevchenkool/Clicker-Game',
    preview: clickergame,
    info:
      'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'JavaScript' },
      
    ],
  },
  {
    id: 'id-6',
    label: 'Phonebook',
    link: 'https://shevchenkool.github.io/goit-react-hw-08-phonebook/',
    repo: 'https://github.com/shevchenkool/goit-react-hw-08-phonebook',
    preview: phonebookImg,
    info:
      'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'Redux' },
      { id: 'id-5', name: 'AJAX' },
      { id: 'id-6', name: 'REST API' },
      { id: 'id-7', name: 'Axios' },
      { id: 'id-8', name: 'Material-UI' },
      { id: 'id-9', name: 'Framer Motion' },
    ],
  },
  {
    id: 'id-5',
    label: 'Movies',
    link: 'https://shevchenkool.github.io/goit-react-hw-05-movies/',
    repo: 'https://github.com/shevchenkool/goit-react-hw-05-movies',
    preview: moviesImg,
    info:
      'App for watching popular and searching films. The application uses themoviedb.org API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Material-UI' },
      { id: 'id-7', name: 'Slugify' },
    ],
  },
    {
    id: 'id-3',
    label: 'Image Finder',
    link: 'https://shevchenkool.github.io/goit-react-hw-04-images/',
    repo: 'https://github.com/shevchenkool/goit-react-hw-04-images',
    preview: imageFinder,
    info:
      'Keyword search image app. The public image search service Pixabay was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
    ],
  },
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://shevchenkool.github.io/goit-markup-hw-08/',
    repo: 'https://github.com/shevchenkool/goit-markup-hw-08/',
    preview: webStudioImg,
    info:
      'Responsive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
];

export const commandProjects = [
  {
    id: 'id-3',
    label: 'Ice Cream',
    link:'yana2022.github.io/team23/',
    repo: 'https://github.com/Yana2022/team23.git',
    preview: icecream,
    info:
      'This app will help you find weak points in knowledge for a QA Engineer so that you can strengthen it.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
  {
    id: 'id-2',
    label: 'Filmoteka',
    repo: 'https://github.com/mrchuguy/filmoteka_team-project.git',
    preview: filmotekaImg,
    info: 'Team project Filmoteka - help yourself with choosing a movie.',
    link: 'https://mrchuguy.github.io/filmoteka_team-project/',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Handlebars' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'AJAX' },
    ],
  }
];
