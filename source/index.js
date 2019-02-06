// import $ from 'jquery'; Before using jQuery, install it with `yarn add jquery`
import './more-javascript/more.js';
import './style/style.scss';
import './style/vendor/style.css';
import './Dropdown.js';
import './Sideout.js';
import './footer.js';

const saySomething = (something) => {
  console.log(something); // eslint-disable-line no-console
};
saySomething('Something! (index.js)');


/*
To use jQuery, first install it as a dependency: `yarn add jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('h1').mouseover(() => {
  alert('h1 hovered!');
});
*/
