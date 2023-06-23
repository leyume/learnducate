FROM tiangolo/uvicorn-gunicorn:python3.9-slim

LABEL maintainer="L eye <leye@bizev.net>"

RUN apt-get update
RUN apt-get install -y gcc
RUN apt-get install -y default-libmysqlclient-dev

RUN pip install --upgrade pip

COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt

# COPY ./app /app
# CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "80"]
# CMD ["/start-reload.sh"]