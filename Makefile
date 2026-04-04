.PHONY: install start build build-en build-es clean lint

install:
	npm install

start:
	npm start

build: build-en

build-en:
	REACT_APP_LANG=en CI=false npm run build

build-es:
	REACT_APP_LANG=es CI=false npm run build

clean:
	rm -rf build node_modules

lint:
	npx eslint src --ext .js,.jsx
