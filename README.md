      
      1.1 ?
    

   --> Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data.
        They should focus on presenting data and delegate data access to a service.
    
   --> In this tutorial, you'll create a HeroService that all application classes can use to get heroes.
        Instead of creating that service with new, you'll rely on Angular [ dependency injection ] to inject it into the HeroesComponent constructor.
    
   --> Services are a great way to share information among classes that don't know each other.
        You'll create a MessageService and inject it in two places:
        
   - in HeroService which uses the service to send a message.
   - in MessagesComponent which displays that message

   ## Create the HeroService
   [ 0.0 Run:    ng generate service hero ]

   *    The command generates skeleton [HeroService class] in ---  src/app/hero.service.ts  ---


   ## @Injectable() services
    
   *    Notice that the new service imports the Angular Injectable symbol and annotates the class with the [ @Injectable() ] decorator.
        This marks the class as one that participates in the [ dependency injection system ].
        The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies.
        It doesn't have any dependencies yet, but it will soon.
   
   
   ## Get hero data
   [  1.0,  1.1  "hero.service.ts"  ] 
  
   *   The HeroService could get hero data from anywhere   ---> a web service, local storage, or a mock data source.  <---    
       Removing data access from components means you can change your mind about the implementation anytime,
       without touching any components. They don't know how the service works.
       
   * 1.0  Import the Hero and HEROES.
   * 1.1  Add a getHeroes method to return the mock heroes
       
       
   ## Provide the HeroService /added by default/
   [ 2.0    "hero.service.ts" ]
   
   *    You must make the HeroService available to the < dependency injection system > before Angular can inject it
        You do this by < registering a provider >. A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.
   * 2.0  Now, you need to make sure that the HeroService is registered as the provider of this service.
        You are registering it with an injector, which is the object that is responsible for choosing and injecting the provider where it is required.
        By default, the Angular CLI command <-- ng generate service --> registers a provider with the root injector for your service
        by including provider metadata in the @Injectable decorator.
        If you look at the @Injectable() statement right before the HeroService class definition, you can see that the providedIn metadata value is 'root':

   *    When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.
 
 
   ## Update the HeroService
   [ 3.0.1  "heroes.components.ts"]

   * 3.0  Delete the HEROES import, because you won't need that anymore. Import the HeroService instead.
   * 3.1  Replace the definition of the heroes property with a simple declaration.
     
   
   ##Inject the HeroService 
   [ 3.2  "heroes.components.ts"]
   
   * 3.2  Add a private heroService parameter of type HeroService to the constructor.
        [->   constructor(private heroService: HeroService) { }   <-]
        * The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
        * When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.


   ##add getHeroes
   [ 3.3  "heroes.components.ts"]
       
   * 3.3  Create a function to retrieve the heroes from the service 
   
   
   ##Call it in ngOnInit 
   [ 3.4  "heroes.components.ts"]
  
   * 3.4  While you could call getHeroes() in the constructor, that's not the best practice.
        Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
        Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance.
   
   -->  After the browser refreshes, the app should run as before, showing a list of heroes and a hero detail view when you click on a hero name.
      
   ##Inject the HeroService 
   [ 3.2  "heroes.components.ts"]
     
   3.2  Add 
         
   ##Inject the HeroService 
   [ 3.2  "heroes.components.ts"]
      
   3.2  Add 



















