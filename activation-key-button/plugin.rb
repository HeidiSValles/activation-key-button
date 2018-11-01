# name: activation-key-button
# about: adds a toggable button which shows activation key resources only to staff or members of a specific group
# version: 0.1
# authors: Heidi Valles
# url: https://github.com/HeidiSValles/plugin

enabled_site_setting :activation_key_button_enabled

after_initialize do
  add_to_serializer(:current_user, :can_see_activation_key_button?) do
    return true if scope.is_staff?
    group = Group.find_by("lower(name) = ?", SiteSetting.activation_key_button_allowed_group.downcase)
    return true if group && GroupUser.where(user_id: scope.user.id, group_id: group.id).exists?
  end
end
