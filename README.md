## Description
The list of five cities is given in the drop-down list. Select any city from the list to fetch the banks of that city. The app has functionality of **case-insensitive** & partial search across all fields (except IFSC and ID. They must match exactly if you want to filter by IFSC or BankID). There is a **Clear search** button in order to clear the applied filters and show all the results.

## Steps to run in local

#### Install yarn
`npm install yarn -g`

In the project directory, you can run:

```bash
yarn
yarn start
```

The app will start in development env on `http://localhost:3000`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## File Structure
- Src
  - Actions
    - Api.js : This file handles API call. 
  - Components
    - BankFinder.js: 
      This is the main component of the app. I have used `ant.design` component library for the main components.
    - Title.js : This file has the title of the app.
  - App.js: The main app which contains child component `Title` and `BankFinder`.
  
