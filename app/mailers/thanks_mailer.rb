class ThanksMailer < ApplicationMailer
  def send_when_admin_thanksmail(user)
    @user = user
    mail to: user.email, subject:  '登録ありがとうございます'
  end
end
