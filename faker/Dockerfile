FROM python:3

COPY . /usr/src/app
RUN python3 -m pip install Flask
RUN python3 -m pip install Faker
WORKDIR /usr/src/app

CMD ["python3","api.py"]