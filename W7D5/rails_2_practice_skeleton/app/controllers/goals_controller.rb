class GoalsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @goal = Goal.new(goal_params)
        @goal.user_id = params[:user_id]

        if @goal.save   
            redirect_to user_url(params[:user_id])
        else
            flash[:errors] = @goal.errors.full_messages  
            redirect_to user_url(params[:user_id])
        end
    end

    def destroy
        goal = Goal.find_by(id: params[:id])
        if goal && goal.user_id == current_user.id
            goal.delete
            redirect_to users_url
        else
            redirect_to new_session_url
        end
    end

    private

    def goal_params 
        params.require(:goal).permit(:name,:details,:status)
    end
end
