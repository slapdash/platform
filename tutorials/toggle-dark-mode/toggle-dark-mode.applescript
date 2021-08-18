# Follow the tutorial at https://developers.slapdash.com/command-tutorials/toggle-dark-mode

tell application "System Events"
  tell appearance preferences
    set dark mode to not dark mode
  end tell
end tell
