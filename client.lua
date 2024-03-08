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


--[[ AddEventHandler("twh_core:allVorpCoreLoadingScreensWillFinishIn4Seconds", function()
	print("twh_startTipps hidden")
	SetNuiFocus(false, false)
	SendNUIMessage({
		action = "none",
		show = false,
	})
end) ]]


RegisterCommand("testTipps", function(source, args, rawCommand)
    SendNUIMessage({
        action = 'startup',
		show = true,
    })
    --SetNuiFocus(true, true)
end, false)
 