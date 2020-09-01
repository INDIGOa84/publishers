module Gemini
  @scope = "account:read,balances:read,payments:send,payments:read"
  @response_type = "code"

  class << self
    attr_accessor :api_base_uri
    attr_accessor :oauth_uri
    attr_accessor :client_id
    attr_accessor :client_secret

    attr_reader :scope
    attr_reader :response_type
  end
end
