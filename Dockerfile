FROM node

MAINTAINER Lakshit Nagar <lakshitnagar@gmail.com>

RUN mkdir -p /opt/youtube/

COPY package.json /opt/youtube/
COPY yarn.lock /opt/youtube/
COPY src /opt/youtube/src
COPY public /opt/youtube/public

RUN cd /opt/youtube/ && yarn install

WORKDIR /opt/youtube/
