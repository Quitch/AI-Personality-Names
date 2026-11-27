var aiPersonalityNamesLoaded;

function aiPersonalityNames() {
  if (aiPersonalityNamesLoaded) {
    return;
  }

  aiPersonalityNamesLoaded = true;

  try {
    var personalityName =
      "text: $data.personality && $data.personality.display_name ? loc($data.personality.display_name) : name";

    _.forEach(
      [
        "div.div_player_name.truncate",
        "td.div_name_header.div_spectator_player_info span",
      ],
      function (selector) {
        var rewritten = 0;
        $(selector).attr("data-bind", function (index, binding) {
          var next =
            binding && binding.replace(/^text: name\b/, personalityName);
          if (next !== binding) {
            rewritten += 1;
          }
          return next;
        });
        if (rewritten === 0) {
          console.warn(
            "Show AI Personality Names: no name binding to rewrite in " +
              selector
          );
        }
      }
    );
  } catch (e) {
    console.error(e);
    console.error("Show AI Personality Names: " + (e.stack || e.message || e));
  }
}
aiPersonalityNames();
