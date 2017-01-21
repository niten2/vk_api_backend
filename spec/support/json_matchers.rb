# module Helpers::JsonMatchers
#   RSpec::Matchers.define :be_not_empty do
#     match do |actual|
#       actual.empty? == false
#     end
#   end

#   def be_a_not_empty(klass)
#     be_a(klass).and(be_not_empty)
#   end

#   def be_nullable(klass, allow_null=true)
#     if allow_null
#       be_a(klass).or(be_nil)
#     else
#       be_a(klass)
#     end
#   end

#   def be_boolean
#     be_a(TrueClass).or(be_a(FalseClass))
#   end

#   def be_boolean_or_nil
#     be_a(TrueClass).or(be_a(FalseClass)).or(be_nil)
#   end

#   def be_an_array_matching(*args)
#     be_a(Array).and(all match(*args))
#   end

#   def be_an_array_include(*args)
#     be_a(Array).and(include(*args))
#   end

#   def errors_json
#     include(
#       errors: include(
#         title: be_a(String),
#         detail: be_a(String),
#         code: be_a(String),
#         status: be_a(String),
#       )
#     )
#   end

#   def errors_v1_json
#     include(
#       errors: be_a(Hash),
#     )
#   end

#   def slug_not_found_json
#     { "errors" => "slug not found"}
#   end

#   def link_not_found_json
#     { "errors" => "link not found"}
#   end

#   def not_authenticated_json
#     { "errors" => "Not Authenticated" }
#   end

# end

# RSpec.configure do |config|
#   config.include Helpers::JsonMatchers
# end
