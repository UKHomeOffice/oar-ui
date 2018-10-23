FROM quay.io/ukhomeofficedigital/nodejs-base:v8.11.1

ENV USER user-platform-public-ui
ENV GROUP group-platform-public-ui
ENV NAME platform-public-ui

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

#RUN groupadd -r ${GROUP}\
# && useradd -r -g ${GROUP} ${USER} -d /usr/src/app \
# #&& mkdir -p ./ \
# && chown -R ${USER}:${GROUP} /usr/src/app

# Copy dependency definitions
#COPY package.json /usr/src/app
COPY package-lock.json package.json ./

# Install dependecies
##npm WARN notice [SECURITY] hoek has the following vulnerability: 1 moderate. 
##Go here for more details: https://nodesecurity.io/advisories?search=hoek&version=2.16.3 
##- Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.
#&& npm i npm@latest -g   \    #Upgrade your npm version, and then 
#&& npm audit                 #to get more info.  
RUN npm install webpack \
 && npm install webpack-dev-server \
 && npm install -D webpack-cli \ 
 && npm install --no-progress --ignore-optional

# Get all the code needed to run the app
#COPY . /usr/src/app

#USER ${USER}

# Expose the port the app runs in
# EXPOSE 8080

# Serve the app
#CMD ["npm","run","dev"]
CMD npm run start:dev
#ENTRYPOINT ["npm run start:dev"]