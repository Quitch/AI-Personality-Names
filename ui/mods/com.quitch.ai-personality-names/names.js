var aiPersonalityNamesLoaded;

function aiPersonalityNames() {
  if (aiPersonalityNamesLoaded) {
    return;
  }

  aiPersonalityNamesLoaded = true;

  try {
    var replaceHtml = function (htmlClass, file) {
      var path = "coui://ui/mods/com.quitch.ai-personality-names/";
      $(htmlClass).replaceWith(loadHtml(path + file));
    };

    replaceHtml("div.div_player_name.truncate", "playing_names.html");
    replaceHtml(
      "td.div_name_header.div_spectator_player_info",
      "spectating_names.html"
    );
  } catch (e) {
    console.error(e);
    console.error(JSON.stringify(e));
  }
}
aiPersonalityNames();
