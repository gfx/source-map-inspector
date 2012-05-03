CLOSUREC=closure

foo.gen.js: foo.js
	$(CLOSUREC) --create_source_map $<.mapping --source_map_format V3 \
		--formatting PRETTY_PRINT \
		$< >$@
	echo '//@ sourceMappingURL=$<.mapping' >> $@

clean:
	rm -rf foo.gen.js foo.js.mapping

.PHONY: clean

