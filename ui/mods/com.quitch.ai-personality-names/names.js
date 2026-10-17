var aiPersonalityNamesLoaded;

function aiPersonalityNames() {
  if (aiPersonalityNamesLoaded) {
    return;
  }

  aiPersonalityNamesLoaded = true;

  try {
    var personalityName =
      "text: $data.personality && $data.personality.display_name ? loc($data.personality.display_name) : name";

    $(
      "div.div_player_name.truncate, td.div_name_header.div_spectator_player_info span"
    ).attr("data-bind", function (index, binding) {
      return binding && binding.replace(/^text: name\b/, personalityName);
    });
  } catch (e) {
    console.error(e);
    console.error("Show AI Personality Names: " + (e.stack || e.message || e));
  }
}
aiPersonalityNames();
