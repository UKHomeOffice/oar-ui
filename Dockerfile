# Create image based on the official Node 6 image from dockerhub
FROM quay.io/ukhomeofficedigital/nodejs-base:v8.11.1

ENV OAR_UI_HOME="/usr/src/app" \
    OAR_USER=oar \
    OAR_UID=1171 \
    OAR_GROUP=oar \
    OAR_GID=1171

RUN yum clean all && \
    yum -y install lsof nmap-ncat && \
    yum clean all 

EXPOSE 80

# Create directories and permissions
RUN groupadd --system --gid ${OAR_GID} "${OAR_GROUP}" && \
    useradd --system --home-dir "${OAR_UI_HOME}" --no-create-home --no-user-group --gid ${OAR_GID} --uid ${OAR_UID} "${OAR_USER}" && \
    install --verbose --owner=${OAR_UID} --group=${OAR_GID} --mode=755 --directory "${OAR_UI_HOME}"

# Create a directory where our app will be placed
#RUN mkdir -p "{OAR_UI_HOME}"
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
#WORKDIR "{OAR_UI_HOME}"
WORKDIR /usr/src/app

# Copy dependency definitions
#COPY package.json "{OAR_UI_HOME}"/
COPY package.json /usr/src/app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
#COPY . "{OAR_UI_HOME}"/
COPY . /usr/src/app/
RUN ls -la "{OAR_UI_HOME}"

COPY ./scripts/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod 755 /usr/local/bin/entrypoint.sh
RUN chown ${OAR_UID}:${OAR_GID} /usr/local/bin/entrypoint.sh
RUN ls -la /usr/local/bin

#USER ${OAR_UID}

ARG OAR_UI_BUILD_COMMIT_SHA="Not Specified"
ARG OAR_UI_BUILD_CREATED="Not Specified"
ARG OAR_UI_BUILD_NUMBER="Not Specified"

ENV OAR_UI_BUILD_COMMIT_SHA="${UI_BUILD_COMMIT_SHA}" \
    OAR_UI_BUILD_CREATED="${UI_BUILD_CREATED}" \
    OAR_UI_BUILD_NUMBER="${UI_BUILD_NUMBER}"

# Serve the app
#ENTRYPOINT ["./usr/local/bin/entrypoint.sh"]
CMD ["npm","run","docker"]