## DEVOPS
Articles and talks which are applicable to devops.

- :notebook: [On Monoliths and Microservices](http://dev.otto.de/2015/09/30/on-monoliths-and-microservices/) - writes about creating scalable applications seperating them in microservices rather then a huge monolithic app. Possible to create different scalabilities - vertical decomposition (apps per sub-domain style - `/api/`, `/store/` etc), distributed computing (individal apps that speak together through some channel), sharding (seperate large data set into smaller one, mostly by creating multiple databases for given range, example a-c, d-f, ..), load balancing (cloan app n times and distribute load beetween them), maximum scalability (combines all of the previously mention solutions). There are a list of pros of developing a microservice application.
- [Varnish + Nginx in comparison with Nginx alone, which is better?](http://www.narga.net/varnish-nginx-comparison-nginx-alone-better/) - low-end VPS with very basic hardware requirement author prefers to use Nginx without Varnish with FastCGI cache, Memcache to get better perfomance and effort. The perfect and over optimize server is not best server as the effort vs results are not worth.