CLOSUREC=closure

foo.min.js: foo.js
	$(CLOSUREC) --create_source_map foo.js.mapping --source_map_format V3 \
		--formatting PRETTY_PRINT \
		$< >$@


clean:
	rm -rf foo.min.js foo.js.mapping

.PHONY: clean

