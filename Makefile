install:
	npm ci
game:
	node bin/brain-games.js

publish:
	npm publish --dry-run
brain-games:
    node bin/brain-games.js
brain-even:
	node bin/brain-even.js
