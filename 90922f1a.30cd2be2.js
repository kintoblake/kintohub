(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),l=(n(0),n(200)),r={title:"Todo List example app",sidebar_label:"Todo List App"},b={id:"examples/todo-list/tutorial",isDocsHomePage:!1,title:"Todo List example app",description:'<iframe width="100%"',source:"@site/docs/examples/todo-list/tutorial.md",permalink:"/examples/todo-list/tutorial",sidebar_label:"Todo List App"},i=[{value:"MongoDB database in the catalog",id:"mongodb-database-in-the-catalog",children:[]},{value:"Setup the Backend API",id:"setup-the-backend-api",children:[{value:"Create the KintoBlock",id:"create-the-kintoblock",children:[]}]},{value:"Setup the Frontend App",id:"setup-the-frontend-app",children:[{value:"Create the KintoBlock",id:"create-the-kintoblock-1",children:[]}]},{value:"Deploy the KintoBlocks",id:"deploy-the-kintoblocks",children:[]},{value:"Configure the blocks",id:"configure-the-blocks",children:[]},{value:"Visit the Todo List app",id:"visit-the-todo-list-app",children:[]}],c={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{class:"iframe-container"},Object(l.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/7gzeeIicRwQ",allowfullscreen:!0})),Object(l.b)("p",null,"This tutorial walks you through the process of deploying a ",Object(l.b)("em",{parentName:"p"},"Todo List")," example app on KintoHub."),Object(l.b)("p",null,"It shows how to deploy the following 3 services:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Frontend SPA app")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/todolist-spa-example"}),"source"),")",Object(l.b)("br",{parentName:"li"}),"A Single Page Application frontend built with React. Allows users to enter and complete todos. Based on the popular ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://todomvc.com"}),"TodoMVC")," examples."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Backend API")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/todolist-api-example"}),"source"),")",Object(l.b)("br",{parentName:"li"}),"A RESTful Node.js API, implemented with the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://hapijs.com"}),"Hapi framework"),". Processes web requests to create, read, update and delete (CRUD) todo entries."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"MongoDB database")," (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/kinto-catalog/tree/master/mongodb"}),"source"),")",Object(l.b)("br",{parentName:"li"}),"A mongo database, storing the todos.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"All you need to get started is a free account on KintoHub and a GitHub account. Don't have an acount on KintoHub yet? ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://beta.kintohub.com/sign-up"}),"Register")," for free.")),Object(l.b)("h2",{id:"mongodb-database-in-the-catalog"},"MongoDB database in the catalog"),Object(l.b)("p",null,"The Todo List app stores all todos in a MongoDB database. It persists the data with a storage volume, so your data are safe, even when the service restarts. To deploy a mongo database, we can use the KintoHub Catalog."),Object(l.b)("p",null,"Note: In order to keep this tutorial as simple as possible, the MongoDB deployed will have the basic configuration -> standalone, no authentication and no persistent storage. However you can change the environment variables on the deployment page and make it High Available. Contact us on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://discordapp.com/invite/QVgqWuw"}),"Discord")," if you need help."),Object(l.b)("h2",{id:"setup-the-backend-api"},"Setup the Backend API"),Object(l.b)("p",null,"The backend API service that interacts with the database can be created."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"browse to the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/todolist-api-example"}),Object(l.b)("inlineCode",{parentName:"a"},"kintohub/todolist-api-example")," repository on GitHub")),Object(l.b)("li",{parentName:"ul"},"use the ",Object(l.b)("strong",{parentName:"li"},"Fork")," button to add the repo to your own GitHub account")),Object(l.b)("h3",{id:"create-the-kintoblock"},"Create the KintoBlock"),Object(l.b)("p",null,"On KintoHub:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"choose ",Object(l.b)("strong",{parentName:"li"},"KintoBlocks")," in the sidebar"),Object(l.b)("li",{parentName:"ul"},"select ",Object(l.b)("strong",{parentName:"li"},"Create New KintoBlock")),Object(l.b)("li",{parentName:"ul"},"then select the ",Object(l.b)("strong",{parentName:"li"},"Microservice")," flavor")),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"assets/examples/todo-list/kintoblock-select-flavor.png",alt:"3 choices of KintoBlocks: Microservice, Website, or Custom Service"}))),Object(l.b)("p",null,"In the ",Object(l.b)("strong",{parentName:"p"},"Choose Repository")," page"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"search and select the forked ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-api-example")," repository"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Continue"))),Object(l.b)("p",null,"In the ",Object(l.b)("strong",{parentName:"p"},"Create Microservice")," page"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"fill out a ",Object(l.b)("strong",{parentName:"li"},"KintoBlock name")," (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-api"),")"),Object(l.b)("li",{parentName:"ul"},"select as ",Object(l.b)("strong",{parentName:"li"},"Language")," the value ",Object(l.b)("inlineCode",{parentName:"li"},"Node.js")," from the list"),Object(l.b)("li",{parentName:"ul"},"select the ",Object(l.b)("strong",{parentName:"li"},"Version")," ",Object(l.b)("inlineCode",{parentName:"li"},"latest")),Object(l.b)("li",{parentName:"ul"},"type the ",Object(l.b)("strong",{parentName:"li"},"Build Command")," ",Object(l.b)("inlineCode",{parentName:"li"},"npm install && npm run build")),Object(l.b)("li",{parentName:"ul"},"type the ",Object(l.b)("strong",{parentName:"li"},"Run Command")," ",Object(l.b)("inlineCode",{parentName:"li"},"npm run serve")),Object(l.b)("li",{parentName:"ul"},"type the ",Object(l.b)("strong",{parentName:"li"},"Port")," ",Object(l.b)("inlineCode",{parentName:"li"},"8000")),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Create Microservice"))),Object(l.b)("p",null,"The build will automatically start on the default branch (",Object(l.b)("inlineCode",{parentName:"p"},"master"),"), it takes about 1.5 minutes to finish successfully."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"assets/examples/todo-list/kintoblock-api-built.png",alt:"Build output"}))),Object(l.b)("p",null,"In the meantime, access the default ",Object(l.b)("strong",{parentName:"p"},"Settings")," of your kintoblock on the top left"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"add environment variable ",Object(l.b)("inlineCode",{parentName:"li"},"MONGODB_CONNECTION_STRING=mongodb://cs-mongodb/todolist?replicaSet=rs0")),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Save Changes"))),Object(l.b)("p",null,"Go back to the overview page."),Object(l.b)("h2",{id:"setup-the-frontend-app"},"Setup the Frontend App"),Object(l.b)("p",null,"The frontend app that calls out to the backend service can be created next."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Browse to the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/todolist-spa-example"}),Object(l.b)("inlineCode",{parentName:"a"},"kintohub/todolist-spa-example")," repository on GitHub")),Object(l.b)("li",{parentName:"ul"},"use the ",Object(l.b)("strong",{parentName:"li"},"Fork")," button to add the repo to your own GitHub account.")),Object(l.b)("h3",{id:"create-the-kintoblock-1"},"Create the KintoBlock"),Object(l.b)("p",null,"On KintoHub:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"choose ",Object(l.b)("strong",{parentName:"li"},"KintoBlocks")," in the sidebar"),Object(l.b)("li",{parentName:"ul"},"select ",Object(l.b)("strong",{parentName:"li"},"Create New KintoBlock")),Object(l.b)("li",{parentName:"ul"},"then select the ",Object(l.b)("strong",{parentName:"li"},"Website")," flavor")),Object(l.b)("p",null,"In the ",Object(l.b)("strong",{parentName:"p"},"Choose Repository")," page"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"search and select the forked ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-spa-example")," repository"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Continue"))),Object(l.b)("p",null,"In the ",Object(l.b)("strong",{parentName:"p"},"Create Website")," page"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"fill out a ",Object(l.b)("strong",{parentName:"li"},"KintoBlock name")," (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-spa"),")"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Dynamic Web app")),Object(l.b)("li",{parentName:"ul"},"select as ",Object(l.b)("strong",{parentName:"li"},"Language")," the value ",Object(l.b)("inlineCode",{parentName:"li"},"Custom Dockerfile")," from the list"),Object(l.b)("li",{parentName:"ul"},"type the ",Object(l.b)("strong",{parentName:"li"},"Port")," ",Object(l.b)("inlineCode",{parentName:"li"},"5000")),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Create Website"))),Object(l.b)("p",null,"The build will automatically start on the default branch (",Object(l.b)("inlineCode",{parentName:"p"},"master"),"), it takes about 2 minutes to finish successfully."),Object(l.b)("p",null,"In the meantime, access the default ",Object(l.b)("strong",{parentName:"p"},"Settings")," of your kintoblock on the top left,"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"add environment variable ",Object(l.b)("inlineCode",{parentName:"li"},"REACT_APP_API_BASE_URL")," with no value"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Save Changes"))),Object(l.b)("p",null,"Go back to the overview page."),Object(l.b)("h2",{id:"deploy-the-kintoblocks"},"Deploy the KintoBlocks"),Object(l.b)("p",null,"On KintoHub:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"choose ",Object(l.b)("strong",{parentName:"li"},"Projects")," in the sidebar"),Object(l.b)("li",{parentName:"ul"},"select ",Object(l.b)("strong",{parentName:"li"},"Create New Project")),Object(l.b)("li",{parentName:"ul"},"fill out a ",Object(l.b)("strong",{parentName:"li"},"Project name")," (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"todolist"),")"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Add KintoBlocks")),Object(l.b)("li",{parentName:"ul"},"search for ",Object(l.b)("inlineCode",{parentName:"li"},"mongodb")," and add it"),Object(l.b)("li",{parentName:"ul"},"search for ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-api")," and add it (depends of how you named it previously)"),Object(l.b)("li",{parentName:"ul"},"search for ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-spa")," and add it (depends of how you named it previously)")),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"assets/examples/todo-list/deployment-kintoblocks.png",alt:"Listing KintoBlocks"}))),Object(l.b)("p",null,"Proceed to deploy the added KintoBlock by"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"pressing the ",Object(l.b)("strong",{parentName:"li"},"Create new project")," button.")),Object(l.b)("p",null,"The deployment is running.\nYou can press ",Object(l.b)("strong",{parentName:"p"},"Expand Project History")," to check in real time the status of your deployment."),Object(l.b)("p",null,"The deployment takes about 2 minutes to succeed."),Object(l.b)("h2",{id:"configure-the-blocks"},"Configure the blocks"),Object(l.b)("p",null,"Your deployment is successfull and you can press ",Object(l.b)("strong",{parentName:"p"},"Open")," on your ",Object(l.b)("em",{parentName:"p"},"Todo List SPA")," KintoBlock to see your todo list."),Object(l.b)("p",null,"However, the ",Object(l.b)("em",{parentName:"p"},"Todo List SPA")," has not been configured yet to send the data to the ",Object(l.b)("em",{parentName:"p"},"Todo List API"),"."),Object(l.b)("p",null,"Go back to your ",Object(l.b)("strong",{parentName:"p"},"Projects")," page."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"use the ",Object(l.b)("strong",{parentName:"li"},"gear icon")," on the ",Object(l.b)("em",{parentName:"li"},"Todo List API")," KintoBlock to open the settings page"),Object(l.b)("li",{parentName:"ul"},"toggle ",Object(l.b)("strong",{parentName:"li"},"Public API & Webhook Access")," to ",Object(l.b)("inlineCode",{parentName:"li"},"on"),", and"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Done Configuring")),Object(l.b)("li",{parentName:"ul"},"scroll down to ",Object(l.b)("strong",{parentName:"li"},"API Access")," and open it"),Object(l.b)("li",{parentName:"ul"},"under ",Object(l.b)("strong",{parentName:"li"},"Access Your API"),", copy the correct URL (similar to ",Object(l.b)("inlineCode",{parentName:"li"},"https://[environment].api.beta.kintohub.com/"),") and add ",Object(l.b)("inlineCode",{parentName:"li"},"todolist-api")," at the end (depends of how you name it previously)"),Object(l.b)("li",{parentName:"ul"},"use the ",Object(l.b)("strong",{parentName:"li"},"gear icon")," on the ",Object(l.b)("em",{parentName:"li"},"Todo List SPA")," KintoBlock to open the settings page"),Object(l.b)("li",{parentName:"ul"},"paste your URL in your ",Object(l.b)("strong",{parentName:"li"},"Environment Variable")," ",Object(l.b)("inlineCode",{parentName:"li"},"REACT_APP_API_BASE_URL")," (similar to ",Object(l.b)("inlineCode",{parentName:"li"},"https://[environment].api.beta.kintohub.com/todolist-api"),")"),Object(l.b)("li",{parentName:"ul"},"press ",Object(l.b)("strong",{parentName:"li"},"Done Configuring"))),Object(l.b)("p",null,"Proceed to deploy the new configuration by"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"pressing the ",Object(l.b)("strong",{parentName:"li"},"Deploy")," button.")),Object(l.b)("h2",{id:"visit-the-todo-list-app"},"Visit the Todo List app"),Object(l.b)("p",null,"Now all services have been deployed and configured we can test the application!"),Object(l.b)("p",null,"Simply scroll to the ",Object(l.b)("em",{parentName:"p"},"Todo List SPA")," KintoBlock, and"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"press the ",Object(l.b)("strong",{parentName:"li"},"Open")," button to view the website in a new browser window.")),Object(l.b)("p",null,"When you enter, modify, delete or complete Todos in the web app UI, it will send API calls to the backend API, and those actions are persisted in the MongoDB database."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Well done,")," and congrats on completing this tutorial! \ud83c\udf89"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you had any issues during this tutorial, ",Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"we're here to help!")),Object(l.b)("br",{parentName:"p"}),"\n","Contact us on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://discordapp.com/invite/QVgqWuw"}),"Discord"),".")))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(r,".").concat(m)]||s[m]||u[m]||l;return n?o.a.createElement(d,b(b({ref:t},c),{},{components:n})):o.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<l;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);