# R-Estates (React Frontend) <img src="https://i.ibb.co/rmLT8kk/logo.png" alt="logo5" border="0" align="center" width="60" border-radius="15">
<img src="https://i.ibb.co/ph3VhnM/home.png" alt="moviehome" border="0">

## Project Summary 
* This app helps you search for rental properties, properties forsale, properties already sold and real estate agents in any city and state in the US.
* The app also allows you to add and delete properties and agents in your own account via the [***Golang Gin Server***](https://github.com/mk870/realEstateApp-server). 
* Another feature is that it allows you to get property recommendations based on your search results.
* Additionally there is a dashboard on the app that shows you the revenues of the company's property sales.It has all types of graphs and visuals to make the data analytics clear and concise.
* Finally, it shows you the tax history, neighborhood, pictures and map of each property.
### Project Steps :
* The app has 12 pages created using react-router (homepage, Rental property watchlist, Forsale property watchlist, Agents watchlist, Sold Properties, dashboard,Agent,Property,Verification,Profile, login and signup page)
* This app consumes 4 apis, a Golang Gin backend Api with a postgreSQL database, Firebase for user profile photo storage, Realtor Api for properties and agents and MapBox api for property location.
* Finally, styled-components was used to style the entire application.

### **Resources Used**
***
**React Version :** 17.0.2  

**Language Used :** Javascript

**Dependencies**:  React-router, React-icons, styled-components, react-context, react-mapbox, react-loader-spinner, react-datepicker, react-region-selector, react-apex-charts, redux and axios.  

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)	![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat&logo=Firebase&logoColor=white)

**For Web Framework Requirements**: npm install

**APIs**: realtor, mapbox ,firebase  and [***Golang Gin Server***](https://github.com/mk870/realEstateApp-server) 

<img src="https://i.ibb.co/VY2zM5m/properties.png" alt="properties" border="0">

### **Properties** 
* Axios is used as the package to fetch the data, utilizing the axios cancelToken property to stop network calls when necessary as the client types in the input field from the Realtor API.

<img src="https://i.ibb.co/N7sdmXc/dashboard.png" alt="dashboard" border="0">

### **Dashboard**  
* The dashboard displays Revenue data using graphs and charts of different kinds e.g pie charts, line chart and bar graphs.

<img src="https://i.ibb.co/w6hYy1N/property.png" alt="dashboard" border="0">

### **Agents and Property Watchlists**  
* The client's agents and properties are created, deleted and saved via a restful [***Golang Gin Server***](https://github.com/mk870/realEstateApp-server) to a postgreSQL database.
* The client can access, delete his/her agents and properties on  his/her account.

### **Productionization**
Deployed the app to Vercel.

**Live Implemantation:** [R-Estates](https://r-estates.vercel.app/)



