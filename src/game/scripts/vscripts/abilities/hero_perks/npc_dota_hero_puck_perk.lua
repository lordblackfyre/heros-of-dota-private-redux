--------------------------------------------------------------------------------------------------------
--
--    Hero: Puck
--    Perk: 50% chance to reflect disjointed spells. 
--
--------------------------------------------------------------------------------------------------------
LinkLuaModifier( "modifier_npc_dota_hero_puck_perk", "abilities/hero_perks/npc_dota_hero_puck_perk.lua" ,LUA_MODIFIER_MOTION_NONE )
--------------------------------------------------------------------------------------------------------
if npc_dota_hero_puck_perk == nil then npc_dota_hero_puck_perk = class({}) end
--------------------------------------------------------------------------------------------------------
--    Modifier: modifier_npc_dota_hero_puck_perk        
--------------------------------------------------------------------------------------------------------
if modifier_npc_dota_hero_puck_perk == nil then modifier_npc_dota_hero_puck_perk = class({}) end
--------------------------------------------------------------------------------------------------------
function modifier_npc_dota_hero_puck_perk:IsPassive()
  return true
end
--------------------------------------------------------------------------------------------------------
function modifier_npc_dota_hero_puck_perk:IsHidden()
  return false
end
--------------------------------------------------------------------------------------------------------
-- Add additional functions
--------------------------------------------------------------------------------------------------------
function modifier_npc_dota_hero_puck_perk:DeclareFunctions()
    local funcs = {
        --MODIFIER_PROPERTY_ABSORB_SPELL,
        MODIFIER_EVENT_ON_PROJECTILE_DODGE,
    }
    return funcs
end

function modifier_npc_dota_hero_puck_perk:OnProjectileDodge(keys)
  if IsServer() then
    if keys.ranged_attack == false then
      local random = RandomInt(1,2) 
      local hCaster = self:GetParent()
      if random == 1 and hCaster.perkAbility then
        if hCaster:HasAbility(hCaster.perkAbility:GetAbilityName()) then
          hCaster:RemoveAbility(hCaster.perkAbility:GetAbilityName())
        end
        local hAbility = hCaster:AddAbility(hCaster.perkAbility:GetAbilityName())
        if hAbility then
          hAbility:SetStolen(true) 
          hAbility:SetHidden(true) 
          hAbility:SetLevel(hCaster.perkAbility:GetLevel())
          hCaster:SetCursorCastTarget(hCaster.perkTarget)
          hAbility:OnSpellStart()
        end
      end
    end
  end
end 
