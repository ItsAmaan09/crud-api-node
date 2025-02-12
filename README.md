echo "# crud-api-node" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M development
git remote add origin https://github.com/ItsAmaan09/crud-api-node.git
git push -u origin development

# crud-api-node

# node project running:-

1. node filename.cs
2. npm run start or
   install nodemon

# routes takes the following structure:-

app.METHOD(PATH,HANDLER)
eg:- function(req,res){
res.send('Response string');
}

# HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object.

# MIDDLEWARE :

Basically, middleware are functions that intercept route handlers, adding some kind of information.

eg:- express.static(path) // path is the relative path of the folder containing assets.

A middleware needs to be mounted using the method:-
app.use(path,middlewareFunction);

## NOTE :-

The first path argument is optional. If you don’t pass it, the middleware will be executed for all requests.

# Serve JSON on a Specific Route

While an HTML server serves HTML, an API serves data.

A REST (REpresentational State Transfer) API allows data exchange in a simple way,
without the need for clients to know any detail about the server.

The client only needs to know where the resource is (the URL), and the action it wants to perform on it (the verb).

The GET verb is used when you are fetching some information, without modifying anything. These days, the preferred data format for moving information around the web is JSON. Simply put, JSON is a convenient way to represent a JavaScript object as a string, so it can be easily transmitted.
