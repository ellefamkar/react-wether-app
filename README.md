# Welcome to my React Weather Application 👋

## Available Scripts

In the project directory, you can run:
### `npm start`

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Thanks for checking out my weather app project which was inspired by [SheCodes React](https://www.shecodes.io/). 
This is under construction! So let's check it in a few days when it is completed! and enjoy it!

Remember that "Every day is a learning day", so let's checkout the requirements to start such project

 ### Screenshot 

![](./src/images/Screenshot%20(166).png)



### Links

- Live Site URL: [React Weather Application](https://fluffy-khapse-918d79.netlify.app/)

## My process

### Where to find resources

The first think to do is to look for your perfect design! So let's checkout [dribble](https://dribbble.com/) our favourite design to begin!

### Built with

- Reactjs
- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow

You can use any tools you like to help you complete the project. So if you got something you'd like to practice, feel free to give it a try. However, i wrote this design with simple html5 and css and made it responsive for all the devices, since my users should be able to: View the optimal layout and hover or active states depending on their device's screen size

### What I learned

This projects helped me being more familiar with the details of react and how to work with react components, hosting and API, and use my css knowledge as well to create a responsive project with small details on colors,sizes and so on. I also tried amazing components wich are gonna be listed soon!

To see parts of my codes and see how you can add code snippets, see below:

``` JSX
  const Search = () => {
    let[city, setCity] = useState("shiraz");
    let[loaded, setLoaded] = useState(false);
    let[weather, setWeather] = useState({});

    const displayWeather = (response) => {
        setLoaded(true);
        setWeather({
            name: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            speed: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    
        })
    };
```
```css
    .App {
    text-align: center;
    text-align: center;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    min-width: 560px;
    padding: 2rem;
    }
```

### Useful resources

In order to do this project in a correct way you need to have a good knowledge of html and css and js, so let's master at them with these fruitful resources.

- [w3schools](https://www.w3schools.com/) - This helps you a lot with both your css and html which is easy to read and has numerous examples.
- [MDN](https://developer.mozilla.org/en-US/) - Remember that no matter how many tutorial videos you have watched, you always need to learn details and features from codes documentations
- [codeacademy](https://www.codecademy.com/)
- [udemy](https://www.udemy.com/) - Here you can find a number of tutorials in different languages
- [coursera](https://www.coursera.org/)

## Author

- Website - [Elle Famkar](https://bespoke-marigold-f2f8e3.netlify.app/)
- Twitter - [@Ellefamkar](https://www.twitter.com/ellefamkar)

Feel free to ask any questions come to your mind  and send me message via my current temporary website in the link above!

## Acknowledgments

I am thankful to each and every person in this area who teaches me a single piece of code! I learn every single day from amazing people! so I need to thank you all ❤

**Have fun using this project!** 🚀
