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
- The breed requests work without an API key. To get images and some additional info, you need an API key.  
- `ngOnInit` will only fire each time the page is freshly created, but not when navigated back to the page. `ngOnDestroy` will only fire when a page is "popped".
- `ionViewWillEnter` would be useful for the API requests if the response data was likely to change frequently.  I don't think that applies here.  
- Doesn't seem like you can use the `inject` function to enable icons in your app.  `addIcons` is a function that you need to call in the constructor to be able to reference an icon by name in your template.  See [the Ionic docs](https://ionicframework.com/docs/angular/build-options#usage-with-standalone-based-applications) for more.  
- Tests with template-driven forms need to be async.  Template forms are not available immediately like reactive forms.  
- Adding a suggestions box under or above the input is not simple.  There isn't really a good UI component to use. Other developers have used modals and positioning tricks to create something similar. This [repo](https://github.com/guylabs/ion-autocomplete) and this [repo](https://github.com/saty932/ionic2-searchbar-suggestions-above-content) may be useful for ideas.    
- I added a [typeahead component](https://ionicframework.com/docs/api/select#typeahead-component) to replace the standard input box on the homepage.  This change matches the DevChallenges mobile design.   
- The typeahead component makes the breeds page a little redundant.  
-  I used radio buttons that the user could select. Users need to confirm their choice, and that triggers navigation to the breed detail page.  
- The modal's search input does not allow a user to bypass selecting the radio button.    

## Continued Development

- Styling.  Desktop considerations?
- There are some lingering errors in the tests.  The random order of the tests can cause some tests to fail.  

## How to Use

```bash
# Clone this repository
$ git clone https://github.com/jdegand/ionic-cat-wiki.git

# Install dependencies
$ npm install

# Need to add / update environment.development.ts file with an apiKey from thecatapi

# Run the app and navigate to localhost:4200
$ npm start

# Run the tests (Firefox launcher is installed)
$ ng test --code-coverage
```

### Need to add / update `environment.development.ts` file 

```javascript
export const environment = {
    production: false,
    apiKey: 'catapi goes here'
};
```

## Useful Resources

- [Ionic](https://ionicframework.com/docs/components) - components
- [Ionic](https://ionic-5-full-starter-app-docs.ionicthemes.com/navigation) - navigation
- [Ionic](https://ionicframework.com/docs/angular/testing) - testing
- [Forums](https://forum.ionicframework.com/t/why-does-the-default-home-page-html-have-2-ion-headers/193703/6) - why does the default home page html have 2 ion headers
- [Stack Overflow](https://stackoverflow.com/questions/55811502/how-to-set-height-on-ion-img) - how to set height on ion img
- [Stack Overflow](https://stackoverflow.com/questions/52539823/ionic-components-are-not-destroyed-after-navigation-to-another-page) - ionic components are not destroyed after navigation to another page
- [Stack Overflow](https://stackoverflow.com/questions/61104129/is-it-necessary-to-unsubscribe-complete-in-a-backend-service-to-prevent-side-eff) - is it necessary to unsubscribe complete in a backend service to prevent side eff
- [YouTube](https://www.youtube.com/watch?v=nxA5Y1pR-dI) - Styling Ionic Components in Angular with CSS Variables
- [Github](https://github.com/ionic-team/ionicons/issues/887) - docs: document addIcons usage
- [Stack Overflow](https://stackoverflow.com/questions/38356084/how-to-unit-test-a-component-that-depends-on-parameters-from-activatedroute) - how to unit test a component that depends on parameters from activatedroute
- [Medium](https://blog.angular.io/advancements-in-the-angular-router-5d69ec4c032) - advancements in the angular router
- [YouTube](https://www.youtube.com/watch?v=DsOxW9TKroo) - How do I test Components & Routing with the RouterTestingHarness
- [Dev.to](https://dev.to/this-is-angular/testing-routed-components-with-routertestingharness-22dl?source=post_page-----4760e83ffd80--------------------------------) - testing routed component with routertestingharness
- [Stack Overflow](https://stackoverflow.com/questions/71133600/importing-ionicmodule-forroot-in-tests-causes-them-to-fail-if-more-then-one-t) - importing ionicmodule forroot in tests causes them to fail if more then one t
- [Devdactic](https://devdactic.com/write-unit-tests-ionic-angular) - write unit tests ionic angular
- [Stack Overflow](https://stackoverflow.com/questions/77395557/unit-test-angular-standalone-component-overriding-provider-not-used) - unit test angular standalone component overriding provider not used
- [Angular Docs](https://angular.io/api/router/testing/RouterTestingHarness) - RouterTestingHarness
- [Angular Dev](https://angular.dev/guide/testing/components-scenarios#testing-with-the-routertestingharness) - components-scenarios routertestingharness
- [Angular Docs](https://angular.io/guide/testing-services) - testing services
- [Angular Docs](https://angular.io/guide/http-test-requests) - http test requests
- [Stack Overflow](https://stackoverflow.com/questions/76429458/karma-angular-test-router-navigate) - karma angular test router navigate
- [YouTube](https://www.youtube.com/watch?v=GT8NXCQRXTw) - Chapter 18 Template Driven Form | Unit Test | Angular | Jasmine | Karma
- [Stack Overflow](https://stackoverflow.com/questions/54642650/spec-has-no-expectation-console-error-although-expect-is-present) - spec has no expectation console eror although expect is present
- [Stack Overflow](https://stackoverflow.com/questions/39960146/testing-error-case-with-observables-in-services) - testing error case with observables in services
- [Stack Overflow](https://stackoverflow.com/questions/49430213/error-expected-no-open-requests-found-1) - error expected no open requests found 1
- [Stack Overflow](https://stackoverflow.com/questions/14519203/spying-on-console-error-with-jasmine) - spying on console error with jasmine
- [Github](https://github.com/ionic-team/ionic-framework/issues/29217) - feat: Support input#list
- [Github](https://github.com/ionic-team/ionic-framework/issues/28634) - feat: IonInput with typeahead feature
- [Github](https://github.com/ionic-team/ionic-framework/issues/26648) - bug: inline modal does not open when the triggering element is added/rendered with a delay
- [Stack Overflow](https://stackoverflow.com/questions/70787011/karma-jasmine-how-i-test-a-close-function-in-a-modal) - karma jasmine how i test a close function in a modal
- [Stack Overflow](https://stackoverflow.com/questions/72473169/integration-testing-an-ionic-modal-with-jasmine-in-angular) - integration testing an ionic modal with jasmine in angular
- [RxJS Docs](https://rxjs.dev/api/index/function/throwError) - throwError