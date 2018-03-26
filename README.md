# ultimate-angular
Courses on Ultimate Angular by Todd Motto

### Prerequisites
Please make sure you have the following installed:
* The latest version of [Node.js](https://nodejs.org/en/).
* Node Sass ```npm install -g node-sass```.
* Yarn ```npm install -g yarn``` is a project manager used to install the dependencies.
* Make sure [Python 2.7.x](https://www.python.org/downloads/) is installed and a environment variable 'PYTHON 'is set 
pointing at the ```python.exe```.

You can use your own favorite IDEA. I'm using [IntelliJ](https://www.jetbrains.com/idea/).

### Project Dependencies
Now that we have a package manager, we can install the project dependencies. You can do this by running:
```
yarn install
```
This will install all dependencies needed to run our Angular application.

### Running the project
During development, the project is built using ```webpack-dev-server```. This provides a local development server as 
well as having webpack recompile our app when a file changes.The project will also automatically refresh the page 
whenever we make changes.

To start the project in development, run:
```
yarn start
```
This will output some information about the project (sush as the TypeScript version and build progress). Once you see
"build completed", you are ready to code! Open your browser to [localhost:4000](http://localhost:4000) to start running 
the code.

### Project Tooling
The project uses ```webpack``` to build and compile all of our assets. This will do the following for us:

* Compile all our TypeScript code into JavaScript (starting from ```main.ts``` and branching outwards from imported files)
* Bundle all our JavaScript into one file to use
* Allow us to use [Sass](http://sass-lang.com/) for our component's CSS files
* Provide the polyfills needed to run our app in all modern browsers
* Mock a JSON backend using [json-server](https://github.com/typicode/json-server)
