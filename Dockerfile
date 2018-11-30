# Create image based on the official Node 6 image from dockerhub
FROM quay.io/ukhomeofficedigital/nodejs-base:v8.11.1

EXPOSE 4001

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

ENV UI_HOME=/opt/ui \
    OAR_USER=oar \
    OAR_UID=1171 \
    OAR_GROUP=oar \
    OAR_GID=1171

# Create a directory where our app will be placed
#RUN mkdir -p "{UI_HOME}"
RUN mkdir -p /opt/ui

# Change directory so that our commands run inside this new directory
#WORKDIR "{UI_HOME}"
WORKDIR /opt/ui

# Create directories and permissions
RUN groupadd --system --gid ${OAR_GID} "${OAR_GROUP}" && \
    useradd --system --home-dir "${UI_HOME}" --no-create-home --no-user-group --gid ${OAR_GID} --uid ${OAR_UID} "${OAR_USER}" && \
    install --verbose --owner=${OAR_UID} --group=${OAR_GID} --mode=770 --directory /opt/ui
    #install --verbose --owner=${OAR_UID} --group=${OAR_GID} --mode=770 --directory "${UI_HOME}"

RUN yum clean all && \
    yum -y install lsof nmap-ncat && \
    yum clean all 

# Copy dependency definitions
#COPY package.json "{UI_HOME}"/
COPY package.json /opt/ui/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
#COPY . "{UI_HOME}"/
COPY . /opt/ui/

COPY ./scripts/entrypoint.sh /usr/local/bin/entrypoint.sh

USER ${OAR_UID}

ARG OAR_UI_BUILD_COMMIT_SHA="Not Specified"
ARG OAR_UI_BUILD_CREATED="Not Specified"
ARG OAR_UI_BUILD_NUMBER="Not Specified"

ENV OAR_UI_BUILD_COMMIT_SHA="${UI_BUILD_COMMIT_SHA}" \
    OAR_UI_BUILD_CREATED="${UI_BUILD_CREATED}" \
    OAR_UI_BUILD_NUMBER="${UI_BUILD_NUMBER}"

# Serve the app
CMD ["npm","run","dev"]
