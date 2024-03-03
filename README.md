# **Audiophile e-commerce website**

The website was created as a frontendmentor.io challenge. It is a multi-page e-commerce website.

## Demo

The project is hosted on **vercel.com**. You can visit it by clicking [here](https://redux-toolkit-audiophile-ecommerce.vercel.app/).

## Project status

The project is completed. It has all the functionality as described in the [challenge page](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

## Features

- ### Multi-page website including:
  - Landing page
  - Product categories page
  - Individual product page
  - Checkout page
  - User login/register pages
- ### Shopping cart functionality
  - Add desired quantity of product to the cart
  - Edit product quantities in the cart
  - Remove all products from the cart
  - Shopping cart data is saved either on local storage if no user is logged or on DB if user is logged
- ### Checkout page
  - Customer information form with form validation and error handling
  - See correct checkout totals depending on the products in the cart including VAT and shipping cost
  - See an order confirmation modal after checking out with an order summary
- ### User functionality

  - Register / Login as a user
  - Every user has his own shopping cart

- ### Responsive design
  - The web app includes mobile, tablet and desktop version

## Technologies used

- React using Create React App - javascript framework / library
- Typescript - for type safety
- Redux Toolkit - state manager
- Firebase - for storing user and products data
- Formik - for handling forms
- Yup - for handling form validations
