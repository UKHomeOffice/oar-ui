# Create image based on the official Node 6 image from dockerhub
FROM quay.io/ukhomeofficedigital/nodejs-base:v8.11.1

#ENV OAR_UI_HOME="/usr/src/app" \
ENV OAR_UI_HOME="/opt/ui" \
    OAR_USER=oar \
    OAR_UID=1171 \
    OAR_GROUP=oar \
    OAR_GID=1171

EXPOSE 80

# Create directories and permissions
RUN groupadd --system --gid ${OAR_GID} "${OAR_GROUP}" && \
    useradd --system --home-dir "${OAR_UI_HOME}" --no-create-home --no-user-group --gid ${OAR_GID} --uid ${OAR_UID} "${OAR_USER}" && \
    install --verbose --owner=${OAR_UID} --group=${OAR_GID} --mode=550 --directory "${OAR_UI_HOME}"
    #install --verbose --owner=${OAR_UID} --group=${OAR_GID} --mode=755 --directory "${OAR_UI_HOME}"

# Create a directory where our app will be placed
RUN mkdir -p "${OAR_UI_HOME}"

# Change directory so that our commands run inside this new directory
WORKDIR "${OAR_UI_HOME}"

# Copy dependency definitions
COPY ./package.json "${OAR_UI_HOME}"/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . "${OAR_UI_HOME}"/

# Get entrypoint script to set env vars and run the app
COPY ./scripts/entrypoint.sh /usr/local/bin/entrypoint.sh

RUN ls -la "${OAR_UI_HOME}" && \
    ls -la /usr/local/bin
#RUN chmod 755 "${OAR_UI_HOME}" && \
RUN chmod 550 "${OAR_UI_HOME}" && \
    chown ${OAR_UID}:${OAR_GID} "${OAR_UI_HOME}"
#RUN chmod 755 /usr/local/bin/entrypoint.sh && \
RUN chmod 550 /usr/local/bin/entrypoint.sh && \
    chown ${OAR_UID}:${OAR_GID} /usr/local/bin/entrypoint.sh

USER ${OAR_UID}

RUN ls -la "${OAR_UI_HOME}" && \
    ls -la /usr/local/bin

ARG OAR_UI_BUILD_COMMIT_SHA="Not Specified"
ARG OAR_UI_BUILD_CREATED="Not Specified"
ARG OAR_UI_BUILD_NUMBER="Not Specified"

ENV OAR_UI_BUILD_COMMIT_SHA="${UI_BUILD_COMMIT_SHA}" \
    OAR_UI_BUILD_CREATED="${UI_BUILD_CREATED}" \
    OAR_UI_BUILD_NUMBER="${UI_BUILD_NUMBER}"

# Serve the app
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
#CMD ["npm","run","docker"]
