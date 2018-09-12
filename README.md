This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Create react app documenation on how to do things
Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


# How to adapt this as a template:

In the Istio template: 
update name: `developer-portal-ui` to `your-name`
updter port: `80` to `your-port`

update the image name `developer-portal-ui` in the `build-and-deploy.sh` (this also udates the template name that is used in the script)

update the endpoint that are called by the frontend in `/src/config.js` for prod from `http://identities:9090` to your backend `xxx`.