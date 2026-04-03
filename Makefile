.PHONY: install start build clean lint

install:
	npm install

start:
	npm start

build:
	CI=false npm run build

clean:
	rm -rf build node_modules

lint:
	npx eslint src --ext .js,.jsx
