class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_reponse

  private 

  def render_record_not_found_response(error)
      render json: { error: "#{error.model} Not Found" }, status: :not_found
  end

  def render_unprocessable_entity_reponse(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
