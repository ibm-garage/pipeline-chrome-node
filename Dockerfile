FROM selenium/standalone-chrome:3.12.0-americium

USER root

RUN wget -O - https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# ADD example /example

ENTRYPOINT []
