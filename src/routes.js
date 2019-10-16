import Home from './routes/Home.svelte'
import Articles from './routes/Articles.svelte'
import Projects from './routes/Projects.svelte'
import NotFound from './routes/NotFound.svelte'
import Contact from './routes/Contact.svelte'

// This demonstrates how to pass routes as a POJO (Plain Old JavaScript Object) or a JS Map
// In this code sample we're using both (controlling at runtime what's enabled, by checking for the 'routemap=1' querystring parameter) just because we are using this code sample for tests too
// In your code, you'll likely want to choose one of the two options only
let routes
const urlParams = new URLSearchParams(window.location.search)
if (!urlParams.has('routemap')) {
    // The simples way to define routes is to use a dictionary.
    // This is a key->value pair in which the key is a string of the path.
    // The path is passed to regexparam that does some transformations allowing the use of params and wildcards
    routes = {
        '/': Home,
        '/articles': Articles,
        '/projects': Projects,
        '/contact': Contact,
        '*': NotFound,
    }
} else {
    routes = new Map()

    routes.set('/', Home)
    routes.set('/projects', Projects)
    routes.set('/articles', Articles)
    routes.set('/contact', Contact)
}

export default routes