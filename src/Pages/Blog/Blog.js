import React from "react";

const Blog = () => {
  return (
    <div className="md:w-1/2 p-2 border-2 shadow mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-center my-5">
          Blog Section
        </h2>
        <div>
          <h4 className="text-xl font-bold">
            1. What are the different ways to manage a state in a React
            application?
          </h4>
          <p>
            There are four main types of states you need to properly manage in
            your React apps: <br />
            
            1. Local state <br /> 2. Global state <br /> 3. Server state 4. URL state <br />
            Local state: Local state is data we manage in one or another
            component. <br />
            it is most often managed in React using the useState hook.
            <br /> <br />
            Global State: Global state is data we manage across multiple
            components. <br />
            It is necessary when we want to get and update data anywhere in our
            app, or in multiple components at least.
            <br /> <br />
            Server State: Data that comes from an external server that must be
            integrated with our UI state. <br />
            Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state. <br />
            <br />
            Url State: Data that exists on our URLs, including the pathname and
            query parameters. <br />
            URL state is often missing as a category of state, but it is an
            important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL!
          </p>
        </div>
        <h2 className="text-xl font-bold mt-4">
          2. How does prototypical inheritance work?
        </h2>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">
          3. What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          A unit test is a type of software test that focuses on components of a
          software product. The purpose is to ensure that each unit of software
          code works as expected. A unit can be a function, method, module,
          object, or other entity in an application’s source code. <br />
          <br />
          The objective of a unit test is to test an entity in the code, ensure
          that it is coded correctly with no errors, and that it returns the
          expected outputs for all relevant inputs. <br />
          Unit tests are typically created by developers during the coding phase
          of a project, and are written as code that exists in the codebase
          alongside the application code it is testing. Many unit testing
          frameworks exist that help developers manage and execute unit tests.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4">
          4. React vs. Angular vs. Vue?
        </h2>
        <p>
          <strong>Angular:</strong> is a front-end framework with lots of
          components, services, and tools. <br /> It is developed and maintained
          by Google developers, but curiously it is not used to implement any of
          their most common products such as Search or YouTube. <br />
          <br />
          <strong>React:</strong> is considered a UI library. Facebook
          developers are behind the development and maintenance of this library.
          And, in this case, most of Facebook’s products are made with React.{" "}
          <br />
          <br />
          <strong>
            Vue: </strong>The Vue.js core library focuses on the View layer only. It’s
            called a progressive framework because you can extend its
            functionality with official and third-party packages, such as Vue
            Router or Vuex, to turn it into an actual framework.
          
        </p>
      </div>
    </div>
  );
};

export default Blog;
