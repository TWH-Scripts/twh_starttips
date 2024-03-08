-- Wait time in ms before the tips are hidden. 
-- Depends on the time needed until character is selected and the loading screen is finished
-- So if the messages are hidden too early, increase the time. If they are hidden too late, decrease the time.
local waitTimer = 7000

Citizen.CreateThread(function()
    --SetNuiFocus(true, true)
	print("twh_startTipps started")
	SendNUIMessage({
		action = "startup",
		show = true,
	})
end)


RegisterNetEvent("vorpcharacter:startCharacterCreator")
AddEventHandler("vorpcharacter:startCharacterCreator", function()
	print("twh_startTipps hidden")
	SetNuiFocus(false, false)
	SendNUIMessage({
		action = "none",
		show = false,
	})
end) 

RegisterNetEvent("vorp:SelectedCharacter")
AddEventHandler("vorp:SelectedCharacter", function()
	Wait(waitTimer)
	print("twh_startTipps hidden")
	SetNuiFocus(false, false)
	SendNUIMessage({
		action = "none",
		show = false,
	})
end)


-- use this command to test the tips without having to restart the game
RegisterCommand("testTipps", function(source, args, rawCommand)
    SendNUIMessage({
        action = 'startup',
		show = true,
    })
    --SetNuiFocus(true, true)
end, false)
 