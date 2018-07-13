require 'asciidoctor/extensions' unless RUBY_ENGINE == 'opal'

include ::Asciidoctor

class DisplayerCheckboxBlockMacro < Extensions::BlockMacroProcessor
	use_dsl

	named :displayer

	def process parent, target, attrs
		label = attrs["label"]
		html = %(<input class='displayer' type='checkbox'> #{label} )
		create_pass_block parent, html, attrs, subs: nil
	end
end
