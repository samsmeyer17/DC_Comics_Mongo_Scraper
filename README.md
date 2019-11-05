# Mongo_Scraper

## Overview

This app allows you to scrape the DC comics website for the weekly comic covers. As of this time you cannot access the comic book itself but you can save the cover image to reference whenever you feel like looking up comics you want to read. Eventually you will be able to add notes to the cover whether or not you have saved it. You can then go into your saved articles and delete each one as you finish the comic book you read or if you lose interest.

## Functions

- The user is able to scrape the dc comics website for the top comics for this week as per their website.
  - Using the scrape button it allows you to find the top weekly comics.
- As you navigate back to the home page after scraping, it will display the cover image and title for each of the scraped comic. 
  - You will be able to click a button allowing you to save each comic you want to read into a separate saved article page.
  - As you save each article, the cover image and title card will get removed from the home page and get moved to the saved page.
  - You can save as many or as little comic covers as you want
- You can then navigate to the saved comics tab and view all of your saved comics
  - Each comic cover and title card will render on the page.
  - As you read or lose interest in your comics, you can click a button to remove the article from the saved page and move back to the home page.
    - Future development could be just deleting the comic cover altogether
- Whether or not you have saved an article you can press the red button with the thinking emoji and it will pop up with a modal that allows you to write a note
  - Via the note modal, you can title your note and add text.
  - The note will be saved to the database and be accessed later
  - (Still working on this part)
  - You can also delete notes

###Technologies Used:
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript
- Handlebars
- Node.js
- Materialize
- Ajax
- Axios
- Cheerio
- Morgan/logger
- Express

### My Role:
Developing the entire application from the css to the database

** Comments **
Link to [Heroku Deployed Application](https://morning-tundra-27207.herokuapp.com/)
Link to [Portfolio](https://samsmeyer17.github.io/Responsive-Portfolio/)
Link to [GitHub](https://github.com/samsmeyer17/Mongo_Scraper)