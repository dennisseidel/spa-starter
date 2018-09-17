# Folder Structure

`/.storybook`: config for the storybook for component development
`/conf`: config for nginx for container deployment
`/public`: static assets (`index.html`, `favicon.ico`)
`/src`: javascript code (`components`, `containers` (views/pages), `services` (need?), `redux` (ducks), `index.js` )

## How to do data access / how to create your compoents? 

Component should not directly access data, either use *Redux* or *Services*. The component uses an actionCreator to create an action and a reducer to fetch the data and update the global state. Where to put the business logik? (pure reducers, action do not specify how but only what ...). See below.

The data is then injected to the components thorugh stateful containers. Components are simple and do not fetch data but represent simple inject state from a higher level component.

In Angular data access is abstracted through *services: more info [here](https://angular.io/tutorial/toh-pt4). I prefer using *Redux*.

Components do not contain business logic. Business Logik is always inside of handlerfunctions in a containers that then uses redux to mange the state through actions.  https://medium.com/@jeffbski/where-do-i-put-my-business-logic-in-a-react-redux-application-9253ef91ce1 / https://github.com/jeffbski/redux-logic#compared-to-redux-saga


## Development & Testing

For the UI only use Integration Testing & and do storybook driven development (for components). (link to my blog): https://www.cypress.io/
- start by designing the component and the data it requires (-> redux)
- then build the components to display and interact with the data

# Create react app documenation on how to do things

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Design Assets

https://drive.google.com/drive/folders/1v3_JC_qtN_3s28NR9DPyiekOt7FHm02w


# How to adapt this as a template:

In the Istio template: 
update name: `developer-portal-ui` to `your-name`
updter port: `80` to `your-port`

update the image name `developer-portal-ui` in the `build-and-deploy.sh` (this also udates the template name that is used in the script)

update the endpoint that are called by the frontend in `/src/config.js` for prod from `http://identities:9090` to your backend `xxx`.