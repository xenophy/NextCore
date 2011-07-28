# Makefile

NODE = node
TEST = expresso
TESTS = test/NX/*.test.js \
		test/Array/*.test.js \
		test/Date/*.test.js \
		test/Function/*.test.js \
		test/Number/*.test.js \
		test/String/*.test.js \
		test/Object/*.test.js

PREFIX = /usr/local
LIB_PREFIX = $(HOME)/.node_libraries

test:
	@rm -Rf node_modules
	@mkdir node_modules
	@mkdir node_modules/NX
	@cp -Rf ./lib/NX.Core node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

test-cov:
	@rm -Rf node_modules
	@mkdir node_modules
	@jscoverage ./lib ./node_modules
	@NODE_ENV=test $(TEST) \
		-I lib -q \
		$(TEST_FLAGS) $(TESTS)
	@rm -Rf node_modules

.PHONY: test test-cov

# eof
