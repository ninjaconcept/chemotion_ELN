class TokenAuthentication
  attr_reader :request

  def initialize(request)
    @request = request
  end

  def is_successful?
    token = request.headers['Auth-Token'] || request.params['auth_token']
    API::AuthenticationKey.find_by(token: token).present?
  end
end
