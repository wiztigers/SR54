RUBY_ENGINE == 'opal' ? (require 'displayer-macro/extension') : (require_relative 'displayer-macro/extension')

Asciidoctor::Extensions.register do
  if (@document.basebackend? 'html') && (@document.safe < SafeMode::SECURE)
    block_macro DisplayerCheckboxBlockMacro
  end
end
