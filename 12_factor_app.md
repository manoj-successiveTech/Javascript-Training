--------The Twelve-factor app Principle/ Methology-------

->The Twelve-factor app is a set of 12 principles or best practices for building web applications, which nowadays are more commonly known as Software-As-A-Service (SAAS) applications. These principles help us to create the applications that use declarative programming for automation of setup which in turns reduces the development time and cost of the projects .

->The Twelve-Factor App methodology provides guidelines for building robust and scalable applications, especially cloud-native ones. These principles focus on simplicity, standardization, and flexibility to facilitate continuous deployment and efficient resource utilization. 

Twelve Principles are:-

1). Codebase: Use a single codebase tracked in revision control, with many deploys. 
explanation:- Your entire application should live in a single version-controlled repository (like Git). You use this same codebase to build and deploy to different environments (development, staging, production).

2). Dependencies:- Explicitly declare and isolate all dependencies.
explanation - Most programming languages offer a packaging system for distributing support libraries like Use tools like package.json for Node.js , Rubygems for Ruby.

-> It declares all dependencies, completely and exactly, via a dependency declaration manifest. Furthermore, it uses a dependency isolation tool during execution to ensure that no implicit dependencies “leak in” from the surrounding system. The full and explicit dependency specification is applied uniformly to both production and development.
It increases the speed of the development as now the developer is free from the task of managing the correct version of the libraries.


3).Configuration: Store configuration in the environment.
explanation:- Configuration that varies between deployments (e.g., database credentials, API keys, external service URLs) should be stored in seprate environment variables, not hardcoded in the codebase.It will enhances security (no sensitive info in code), allows easy changes without re-deploying code, and keeps code generic.

4).Backing Services: Treat backing services (databases, message queues) as attached resources.
Explanation:- In simple terms, any service that your application consumes over the network is known as a backing service. Your application must treat these services as resources which it is consuming over the network. It gives us the advantage that our services become easily interchangeable and offer great portability to our application.
ex-A simple example is supposed your application is currently using a local PostgreSQL database for its operations and it is afterward replaced with the one hosted on the server of your company by just changing the URL and the database credentials.


5). Build, Release, Run:- Separate build, release, and run stages.
explnation:- The deployment of your application must be properly separated into three non-overlapping non-dependent phases namely build, release and run. 
The build phase constitutes the compilation of the code which in the end generates the artifact like a JAr or WAR file. 
The second phase, release, take the artifact file generated at the end of the previous phase and adds the configurations for a particular environment to it. T
The last phase - Run which includes the running of the instance of the application.

6). Processes: Execute the app as one or more stateless processes.
Explanation-  processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.Don't store session data or other state within the app's memory; use a database or cache for that).

ex- A user logs into your web application. Instead of storing their session data directly in the application's memory on one server, you store it in a Redis cache (a backing service). If that server goes down, or if the user's next request goes to a different server, their session data is still accessible.

Note:- Stateless processes, in the context of computing, are processes that do not retain information about past interactions or transactions. Each request or event is treated independently, and the process operates without relying on previously stored state. This means the process has no memory of prior actions or interactions. 

7).Port Binding:- Export services via port binding.

Explnation:- Your app should be self-contained and expose its services through a port .Your application should be self-contained and expose its services by binding to a port specified by the environment. It doesn't rely on a specific web server injection into the runtime.
ex- In a local development environment, the developer visits a service URL like http://localhost:5000/ to access the service exported by their app. In deployment, a routing layer handles routing requests from a public-facing hostname to the port-bound web processes.

8).Concurrency: Scale horizontally by scaling individual processes.

Explanation:- To handle more load, add more identical processes (instances) of your application, rather than increasing the size or power of a single process.Add more identical processes to handle increased load, rather than making individual processes bigger.

Example: If your web application experiences high traffic, instead of trying to run it on a single, massive server, you launch 5 or 10 identical instances of your stateless application process. A load balancer then distributes incoming requests across these instances.

9). Disposability:- Design for fast startup and graceful shutdown for resilience.

Explanation:-  This facilitates fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.
Our app should start and stop quickly and gracefully handle interruptions.Your application processes should start quickly and shut down gracefully, handling sudden termination. They should be robust enough to be killed and restarted at any time.Facilitates rapid scaling, rolling updates, and recovery from crashes without manual intervention.

For example- one of the processes of our application is storing the details of a newly added employee to the company into a database. But while doing so, in between an unexpected error occurs which causes the process to terminate in between unexpectedly. However, the state of our application or database must not be affected by it and the process must fail-safe. Also, it must start quickly whenever required.

10) Development/Production Parity:- Keep development, staging, and production environments similar.

Explanation:- It minimize the gaps between your development environment and your production environment in terms of code, dependencies, backing services, and operating system. 
It reduces surprises and "works on my machine" issues when deploying to production.

11.Logs:- Treat logs as event streams.

Explanation:- Logs provide visibility into the behavior of a running app. In server-based environments, they are commonly written to a file on disk (a “logfile”); but this is only an output format. Don't try to manage log files internally. A separate logging service should capture, aggregate, and analyze these streams.

12. Admin Processes: Run admin tasks as one-off processes from a machine running the latest production code. 

Explanation:- There are diffrent administrative tasks (like database migrations, analyzing data , running one-off scripts) which 
should be run as isolated processes against a release, using the same codebase and environment as your regular application processes.

->It ensures that these tasks are run in the same environment and with the same code as your main application, reducing potential for errors.









