# Ionic Cat Wiki

This is an Ionic conversion of my [Angular Cat Wiki](https://github.com/jdegand/angular-cat-wiki).  

## Built With

- Angular 17.0.2
- Ionic 7.5
- [thecatapi](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)

## Thoughts

- After install, there was a warning in the `angular.json` about `progress` not being allowed.  This [Stack Overflow](https://stackoverflow.com/questions/71711355/ionic-6-ci-property-progress-is-not-allowed) has been unanswered for over a year.  I will try to find an answer and I will leave the `progress` property in the file for now.  
- I used the `application` builder in the `angular.json`.
- The home route is lazy-loaded in the initial `app.routes.ts` file.  I need to look more into this, but it seems like this is more acceptable now.  I don't think it is correct to lazy-load the home route. 
- Ionic adds generated pages directly to the `app.routes.ts`.   
- I used the Ionic CLI to initialize the project.  Its Angular version is pretty outdated at only `17.0.2`.   
- The breed requests work without an API key.  I don't know if this has changed or if the API has a misconfiguration.   

## Useful Resources

- [Ionic](https://ionicframework.com/docs/components) - components
- [Ionic](https://ionic-5-full-starter-app-docs.ionicthemes.com/navigation) - navigation
- [Forums](https://forum.ionicframework.com/t/why-does-the-default-home-page-html-have-2-ion-headers/193703/6) - why does the default home page html have 2 ion headers